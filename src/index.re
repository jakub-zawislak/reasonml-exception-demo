Js.log("Hello, BuckleScript and Reason!");

let number = try (float_of_string("1,")) {
  | Failure(_) => 0.0;
};

Js.log(number)
