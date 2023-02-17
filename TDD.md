Describe robogerResponds()

Test: "It should identify the number 1 in a string of numbers"
Code: robogerResponds("1")
Expected Result: 1

Test: "It should identify the number 2 in a string of numbers"
Code: robogerResponds("2")
Expected Result: 2

Test: "It should identify the number 3 in a string of numbers"
Code: robogerResponds("3");
Expected Result: 3


Test: "It should replace the entered number of 1 with the phrase "Beep!"
Code: robogerResponds("1");
Expected Result: Beep!

Test: "It should replace the entered number of 2 with the phrase "Boop!"
Code: robogerResponds("2");
Expected Result: Boop!

Test: "It should replace the entered number of 3 with the phrase "Won't you be my neighbor?"
Code: robogerResponds("3");
Expected Result: Won't you be my neighbor?

Test: "It should return a string printed to the screen equal to the number entered, starting at 0, and substituting only to 1, 2, 3 numbers for "Beep!", "Boop!", and "Won't you be my neighbor?"
Code: robogerResponds("5")
Expected Result: 0,BEEP!,BOOP!,Won't you be my neighbor?,4,5

Test: "It should return "Wont you be my neighbor?" if the number contains a 1 before the 3"
Code: robogerResponds("13");
Expected Result: Won't you be my neighbor?

Test: "It should return "Boop!" if the number contains a 1 before the 2"
Code: robogerResponds("12")
Expected Result: "Boop!"

Test: "It should return "Won't you be my neighbor?" if the number contains a 2 before the 3"
Code: robogerResponds("23")
Expected Result: Won't you be my neighbor?

Test: "It should return "Boop!" if the number contains a 2 before the 1"
Code: robogerResponds("21")
Expected Result: Boop!