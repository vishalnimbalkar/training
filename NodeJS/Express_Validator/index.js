const express = require("express");
require("dotenv").config();
const { query, validationResult, matchedData, body, param} = require("express-validator");

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/hello", query("name").notEmpty(), (req, res) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = matchedData(req);
      console.log(data.name);
      return res.status(200).json({ message: "hello " + req.query.name });
    }
    return res.status(400).json({ message: "Invalid name", errors: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
});


app.post(
  "/register",
  body("name").optional().trim(),
  body("email").isEmail().withMessage("Email is not valid").bail(),
  body("password").notEmpty().isLength({min : 8}),
  (req, res) => {
    try {
      const result = validationResult(req);
      const data = matchedData(req);
// data.name
      if (result.isEmpty()) {
        return res.status(200).json({ message: "register success", data });
      }
      return res.status(400).json({ message: "Invalid data", errors: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error" });
    }
  }
);


// matchedData()
// wraps all fields into single object
// const data = matchedData(req);
// data.name
// data.email

//validation chain
// Validation chains are created by functions such as body(), param(), query()
// Validation chains not only have a number of useful methods for defining validations and sanitizations, but they are also middleware functions, meaning that they can be passed to any express.js route handler.

// A validation chain has three kinds of methods: validators, sanitizers and modifiers.
// 1.validators
// - checks field value is valid or invalid
// .custom()
// Syntax - custom(validator: (value, { req, location, path, pathValues }) => any): ValidationChain
// it adds custom validator function to the chain
// The field value will be valid if:
// The custom validator returns truthy; or
// The custom validator returns a promise that resolves.

// syntax - app.post('/register', body('email').custom(function), (req, res)={})

app.post(
  "/checkEmail",
  body("email")
    .custom(async (email) => {
      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        throw new Error("email is already in use");
      }
    })
    .isEmail(),
  (req, res) => {
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        const data = matchedData(req);
        return res.status(200).json({ message: "email is available", data });
      }
      return res.status(400).json({ message: "Invalid email", errors: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error" });
    }
  }
);

const emails = ["vishal@gmail.com", 'rahul@gmail.com'];

const findUserByEmail = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = emails.find((existingEmail) => existingEmail === email);
      resolve(user ? { email: user } : null);
    }, 200); 
  });
};
// .exists()
// exists(options?: {
//   values?: 'undefined' | 'null' | 'falsy',
//   checkNull?: boolean,
//   checkFalsy?: boolean
// }): ValidationChain
// - Adds a validator to check if the field exists.
// undefined values don't exist
// undefined and null values don't exist
// Falsy values (empty strings, 0, false, null and undefined values don't exist)

app.post('/update', body('name').exists(), (req, res)=>{
 try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        const data = matchedData(req);
        return res.status(200).json({ message: "name is available", data });
      }
      return res.status(400).json({ message: "Invalid name", errors: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error" });
    }
})

// .isArray() - checks values is an array
// .isObject() - checks values is an object
// .isString() - checks value is an string
// .notEmpty() - checks values is not empty

// 2.sanitizers
// - transform the field value
// .customSanitizer()
//  -adds custom sanitizers function to the chain. the value return by the function will become the new value for the field. 

app.get('/:name',param('name').customSanitizer(value => value.toUpperCase()), (req, res)=>{
    try {
      const result = validationResult(req);
      if (result.isEmpty()) {
        const data = matchedData(req);
        return res.status(200).json({ message: "success", data });
      }
      return res.status(400).json({ message: "Invalid name", errors: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error" });
    }
})

// .default()
// replace the value of the field if its either String, null, undefined, or NaN

app.post("/checkDefault", body("name").default("vishal"), (req, res) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.status(200).json({ message: "hello " + req.body.name });
    }
    return res.status(400).json({ message: "Invalid name", errors: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
});

//.replace()
// replace the value of field specified value whenever the given value matched with mention values 
app.post('/replace', body('username').replace(['vishal', 'rahul'], 'admin'), (req, res) => {
 try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.status(200).json({ message: "hello " + req.body.username });
    }
    return res.status(400).json({ message: "Invalid name", errors: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
});

// .toUpperCase()
// .toLowerCase()

// 3.modifiers - adding conditions
//  .bail()
// - it stop running the validation chain if previous validator failed. 
// - it can be used multiple times in validation chain 
// body('username')
//   .isEmail()
//   .bail()
//   .custom(checkDenylistDomain)
//   .bail()
//   .custom(checkEmailExists);

// .if()
// it adds condition in validation chain wheather validation chain should continue or not 
// body('newPassword')
//   // Only validate if the old password has been provided
//   .if((value, { req }) => req.body.oldPassword)
//   // Or, use a validation chain instead
//   .if(body('oldPassword').notEmpty())
//   // The length of the new password will only be checked if `oldPassword` is provided.
//   .isLength({ min: 6 });

// .not()
// it negates the result of next validator in chain 
// check('weekday').not().isIn(['sunday', 'saturday']);

// .optional()
// makes current validation chain as a optional
// it skip validation depending on its values( if values are null, undefined, falsy, 0 )
//  body('email')
//       .optional() // skip validation if email not provided
//       .isEmail()

// .hide()
// it hides the field value in errors returned by validationResult().
// if the value is confidential such as api key we can hide it
// Omits the value in the errors
// query('api_key').custom(isValidKey).hide();

// Replaces the value in the errors with '*****'
// query('api_key').custom(isValidKey).hide('*****');

// .withMessage()
// Sets the error message used by the previous validator 
// body('email')
//       .isEmail().withMessage('Email must be valid'),

app.use(express.json());
app.listen(port, () => console.log(`server running on port ${port}`));
