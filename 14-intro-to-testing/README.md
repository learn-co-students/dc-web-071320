# Intro to Testing in Ruby

* Sometimes our code is broken...
* How do we know whether it's broken or not?
  - Manual testing: we have to check each piece of code after we make a change
* How can we automate manually testing our code?
  - Writing test cases
* What tool can we use in Ruby to test our classes/methods?
  - Rspec
* How do we setup this tool in our dev environment?
  - `rspec --init`
* What kind of process should we use to organize our tests?
  - One file per class
* What kind of process should we use to write our tests?
  - Arrange, Act, and Assert
* Which pieces of our code should we be testing?
  - Probably not built in methods (sort, initialize)
* Which test cases should we choose to test?
  - General test case for each method
  - Edge cases as they come up
* What is unit testing?
  - classes and methods
* What are other levels of testing besides unit testing?
  - Integration, System, User Acceptance tests
* What is test-driven development (TDD)?
  - Writing your tests before you write your code, letting your tests define what your code should do

* What's your experience?
  - Test as you go/code (manual)
    - In a REPL (binding.pry), you'll write code to test your classes/methods
    - In some kind of run file, you'll write test code
  - As we're writing labs, we run our tests (automated)
    - Run test before you code (get an idea of what you need to build)
    - Run test after every method
    - Before you finish your work
