# Test Cases for Calculator Application - Task1(Prodigy InfoTech)

✅ **Internship Task** – Software Testing \
🏢 **Company**: Prodigy InfoTech  
📄 **Project Title**: Test Cases for calculator Application\
🔗**Calculator Application**: <https://dunizb.github.io/sCalc/>

---

### Test Case ID: TC_ADD_001

**Description:** Verify addition of two positive numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. Press "+" button
3. Enter 3
4. Press "="

**Expected Result:** 8

### Test Case ID: TC_ADD_002

**Description:** Verify addition of a positive number and a negative number\
**Preconditions:** Calculator is functional

**Steps:**
1. Enter 5
2. Press "+" button
3. Enter -3
4. Press "="

**Expected Result:** 2

### Test Case ID: TC_ADD_003

**Description:** Verify addition of two decimal numbers
**Preconditions:** Calculator is loaded

**Steps:**
1. Enter 1.7
2. Press "+"
3. Enter 6.5
4. Press "="

**Expected Result:** 8.2

### Test Case ID: TC_ADD_004

**Description:** Verify adding zero and a number
**Preconditions:** Calculator is loaded

**Steps:**
1. Enter 0
2. Press "+"
3. Enter 6
4. Press "="

**Expected Result:** 6


### Test Case ID: TC_ADD_005

**Description:** Verify adding multiple numbersin a row.
**Preconditions:** Calculator is loaded

**Steps:**
1. Enter 1
2. Press "+"
3. Enter 2
4. press "+"
5. Enter 3
6. Press "="

**Expected Result:** 6


### Test Case ID: TC_SUB_006

**Description:** Verify subtraction of a smaller number from a larger number.
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 10
2. Press "-"
3. Enter 3
4. Press "="

**Expected Result:** 7

### Test Case ID: TC_SUB_007

**Description:** Verify subtraction of two negative numbers
**Preconditions:** Calculator is open

**Steps:**
1. Enter -5
2. Press "-"
3. Enter -1
4. Press "="

**Expected Result:** -4

### Test Case ID: TC_SUB_008

**Description:** Verify subtaction of larger number from a smaller number.
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. Press "-"
3. Enter 10
4. Press "="

**Expected Result:** -5

### Test Case ID: TC_SUB_009

**Description:** Verify subtraction of decimal numbers
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 4.73
2. Press "-"
3. Enter 2.5
4. Press "="

**Expected Result:** 2.23

### Test Case ID: TC_SUB_010

**Description:** Verify subtraction with 0
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 0
2. Press "-"
3. Enter 6
4. Press "="

**Expected Result:** -6

### Test Case ID: TC_SUB_011

**Description:** Subtract a number and itself
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. Press "-"
3. Enter 5
4. Press "="

**Expected Result:** 0

### Test Case ID: TC_MUL_012

**Description:** Verify multiplication of two positive numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2
2. Press "x"
3. Enter 5
4. Press "="

**Expected Result:** 10

### Test Case ID: TC_MUL_013

**Description:** Verify multiplication with a negative number\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. Press "x"
3. Enter -3
4. Press "="

**Expected Result:** -15

### Test Case ID: TC_MUL_014

**Description:** Verify multiplication with two negative numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter -3
2. Press "x"
3. Enter -2
4. Press "="

**Expected Result:** 6

### Test Case ID: TC_MUL_015

**Description:** Verify multiplication with 0\
**Preconditions:** Calculator is active

**Steps:**
1. Enter 5
2. Press "x"
3. Enter 0
4. Press "="

**Expected Result:** 0

### Test Case ID: TC_MUL_016

**Description:** Verify multiplication of decimal numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 1.57
2. Press "x"
3. Enter 6.2
4. Press "="

**Expected Result:** 9.734

### Test Case ID: TC_DIV_017

**Description:** Verify division of two positive numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 10
2. Press "÷"
3. Enter 2
4. Press "="

**Expected Result:** 5

### Test Case ID: TC_DIV_018

**Description:** Verify division by a negative number\
**Preconditions:** Calculator is functional

**Steps:**
1. Enter 14
2. Press "÷"
3. Enter -7
4. Press "="

**Expected Result:** -2

### Test Case ID: TC_DIV_019

**Description:** Verify division by 0\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 10
2. Press "÷"
3. Enter 0
4. Press "="

**Expected Result:** Infinity

### Test Case ID: TC_DIV_020

**Description:** Verify division using decimal numbers\
**Preconditions:** Calculator is operation

**Steps:**
1. Enter 5.5
2. Press "÷"
3. Enter 2
4. Press "="

**Expected Result:** 2.75

### Test Case ID: TC_DIV_021

**Description:** Verify division with a number that leaves reminder\
**Preconditions:** Calculator is operation

**Steps:**
1. Enter 5
2. Press "÷"
3. Enter 2
4. Press "="

**Expected Result:** 2.5

### Test Case ID: TC_DIV_022

**Description:** Verify division of a number by itself
**Preconditions:** Calculator is operation

**Steps:**
1. Enter 7
2. Press "÷"
3. Enter 7
4. Press "="

**Expected Result:** 1

### Test Case ID: TC_DIV_023

**Description:** Verify division by 1
**Preconditions:** Calculator is operation

**Steps:**
1. Enter 2
2. Press "÷"
3. Enter 1
4. Press "="

**Expected Result:** 2

### Test Case ID: TC_DIV_024

**Description:** Verify decimal rounding in division output.\
**Preconditions:** Calculator supports decimals

**Steps:**
1. Enter 10
2. Press ÷
3. Enter 3
4. Press =.

**Expected Result:** 3.3333333 is shown, rounded to nearest supported precision 

### Test Case ID: TC_BODMAS_025

**Description:** Verify BODMAS rule is respectedin mixed operations\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2+3x4
2. Press "="

**Expected Result:** 14 is displayed (Multiplication before addition).

### Test Case ID: TC_EMPTY_026

**Description:** Verify pressing "=" without any input\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Press "="

**Expected Result:** No ronse ,display shows 0 

### Test Case ID: TC_DOUBLE_DOT_027

**Description:** Verify calculator handles multiple decimal points\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2..3
2. press "+"
3. Enter 1
4. Press "="

**Expected Result:** considers only one decimal point .

### Test Case ID: TC_LARGE_NUM_028

**Description:** Verify calculator can handle large number operations\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 999999999
2. press "x"
3. Enter 999999999
4. Press "="

**Expected Result:** 999999998000000001 is displayed

### Test Case ID: TC_MUL_OPS_029

**Description:** Verify calculator handles a long chained expression correctly\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2 + 3 - 1 × 5 ÷ 2
2. Press "="

**Expected Result:** 2 + 3 - (1 × 5 ÷ 2) = 2 + 3 - 2.5 = 2.5 (if BODMAS respected)

### Test Case ID: TC_DEC_LEAD_ZERO_030

**Description:** Verify decimal input with leading zero \
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 0.75
2. press "+"
3. Enter 0.25
4. Press "="

**Expected Result:** 1

### Test Case ID: TC_DEC_NO_LEAD_ZERO_031

**Description:** Verify decimal input without leading zero\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter .75
2. press"+"
3. Enter .25
4. Press "="

**Expected Result:** 1.0 or 1 is displayed (if .75 is accepted as valid input or .75 is cosidered as 0.75)

### Test Case ID: TC_LEAD_ZERO_032

**Description:** Verify input with leading zero \
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 0008
2. press "+"
3. Enter 0002
4. Press "="

**Expected Result:** 10 (leading zeros should be ignored)

### Test Case ID: TC_REPEATED_OPS_033

**Description:** Verify pressing operator multiple times does not crash calculator.\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. press"+" twice
3. Enter 2
4. Press "="

**Expected Result:** 7 is displayed; extra operator press is ignored or replaced

### Test Case ID: TC_RESULT_CHAIN_034

**Description:** Verify using the result of one operation in the next without clearing.\
**Preconditions:** Calculator is loaded and finished a valid calculation

**Steps:**
1. Enter 4+5
2. press "="
3. press "x"
4. Enter 2
5. Press "="

**Expected Result:** 18 is displayed

### Test Case ID: TC_MULTIPLE_EQUAL_PRESS_035

**Description:** Verify behavior when = is pressed repeatedly.\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 4+5
2. press "=" multiple times

**Expected Result:** First press returns 9. Subsequent presses either do nothing or repeat last operation (if feature supported).

### Test Case ID: TC_NEG_ZERO_036

**Description:** Verify calculator correctly interprets negative zero if allowed\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter -0
2. press "+"
3. Enter 5
4. Press "="

**Expected Result:** 5

### Test Case ID: TC_NON_NUMERIC_037

**Description:** Verify calculator rejects alphabetic input and special characters\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter A or @
2. press "+"
3. Enter 5
4. Press "="

**Expected Result:** No response when tried to enter non numeric characters

### Test Case ID: TC_CE_038

**Description:** Verify pressing CE multiple times without giving any input\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Press "CE" multiple times

**Expected Result:** Display should show 0 

### Test Case ID: TC_KEY_INPUT_039

**Description:** Verify if keyboard input is allowed
**Preconditions:** Calculator is loaded.

**Steps:**
1. Try entering numbers using keyboard\

**Expected Result** doesnot respond to keyboard input

### Test Case ID: TC_LONG_DIGIT-040

**Description:** Verify entering a long digit input
**Preconditions:** Calculator is loaded.

**Steps:**
1. Try entering 20 digit number

**Expected Result** It should show full screen and doesnot respond after 16th digit.


---

### 🔗**Project Demo**
📂 **GitHub**: <https://github.com/nswapna-g19/Test-Cases_calculator-app>
