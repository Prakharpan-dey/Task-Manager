import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({min: 3}).withMessage("Username should be atleast 3 characters.")
            .isLength({max: 13}).withMessage("Username cannot exceed 13 characters"),
        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
            .isStrongPassword().withMessage("Not a strong password. Password must be atleast 8 characters long with atleast 1 lowercase, uppercase, number & symbol"),
        body("role")
            .trim()
            .notEmpty().withMessage("Please select a role")
    ];
};

const userLoginValidator = () => {
    return [
        body("email")
            .isEmail().withMessage("Email is not valid"),
        body("password").notEmpty().withMessage("Password cannot be empty"),
    ];
};

export { userRegistrationValidator, userLoginValidator };