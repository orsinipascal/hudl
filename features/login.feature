Feature: HUDL Login

  Background: 
    Given I am on the login page
    When I click on the log in button

  Scenario: Check the login form
    Then the email and password labels and input fields should be displayed
    And I expect the inputs to be email and password type
    And a remember me checkbox and a need help link should be displayed
    And a log in with an organization button should be displayed
    And a log in button should be displayed

  Scenario: No email/password entered
    And no email and password are entered
    Then an error message should be displayed
    And I should not be logged in

  Scenario Outline: As a user, I can log into the application
    And I login with <email> and <password>
    Then I should be logged in

    Examples: 
      | email                     | password   |
      | pascal.orsini@outlook.com | hudl081122 |

  Scenario Outline: As a user, I cannot log into the application
    And I login with <email> and <password>
    Then an error message should be displayed
    And I should not be logged in

    Examples: 
      | email     | password     |
      | fakeEmail | fakePassword |
