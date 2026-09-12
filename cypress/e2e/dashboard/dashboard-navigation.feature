Feature: Dashboard navigation
  As a workspace member
  I want to use the sidebar
  So that I can reach each dashboard section

  Scenario: Open the Features page from the sidebar
    Given I open the dashboard
    When I select Features from the sidebar
    Then I should see the Features page
