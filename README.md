# Test Cases for Calculator Application - Task1(Prodigy InfoTech)s

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

### Test Case ID: TC_SUB_004

**Description:** Verify subtraction of a smaller number from a larger number.
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 10
2. Press "-"
3. Enter 3
4. Press "="

**Expected Result:** 7

### Test Case ID: TC_SUB_005

**Description:** Verify subtraction of two negative numbers
**Preconditions:** Calculator is open

**Steps:**
1. Enter -5
2. Press "-"
3. Enter -1
4. Press "="

**Expected Result:** -4

### Test Case ID: TC_SUB_006

**Description:** Verify subtaction of larger number from a smaller number.
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. Press "-"
3. Enter 10
4. Press "="

**Expected Result:** -5

### Test Case ID: TC_SUB_007

**Description:** Verify subtraction of decimal numbers
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 4.73
2. Press "-"
3. Enter 2.5
4. Press "="

**Expected Result:** 2.23

### Test Case ID: TC_MUL_008

**Description:** Verify multiplication of two positive numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2
2. Press "x"
3. Enter 5
4. Press "="

**Expected Result:** 10

### Test Case ID: TC_MUL_009

**Description:** Verify multiplication with a negative number\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. Press "x"
3. Enter -3
4. Press "="

**Expected Result:** -15

### Test Case ID: TC_MUL_010

**Description:** Verify multiplication with two negative numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter -3
2. Press "x"
3. Enter -2
4. Press "="

**Expected Result:** 6

### Test Case ID: TC_MUL_011

**Description:** Verify multiplication with 0\
**Preconditions:** Calculator is active

**Steps:**
1. Enter 5
2. Press "x"
3. Enter 0
4. Press "="

**Expected Result:** 0

### Test Case ID: TC_MUL_012

**Description:** Verify multiplication of decimal numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 1.57
2. Press "x"
3. Enter 6.2
4. Press "="

**Expected Result:** 9.734

### Test Case ID: TC_DIV_013

**Description:** Verify division of two positive numbers\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 10
2. Press "÷"
3. Enter 2
4. Press "="

**Expected Result:** 5

### Test Case ID: TC_DIV_014

**Description:** Verify division by a negative number\
**Preconditions:** Calculator is functional

**Steps:**
1. Enter 14
2. Press "÷"
3. Enter -7
4. Press "="

**Expected Result:** -2

### Test Case ID: TC_DIV_015

**Description:** Verify division by 0\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 10
2. Press "÷"
3. Enter 0
4. Press "="

**Expected Result:** Infinity

### Test Case ID: TC_DIV_016

**Description:** Verify division using decimal numbers\
**Preconditions:** Calculator is operation

**Steps:**
1. Enter 5.5
2. Press "÷"
3. Enter 2
4. Press "="

**Expected Result:** 2.75

### Test Case ID: TC_DIV_017

**Description:** Verify decimal rounding in division output.\
**Preconditions:** Calculator supports decimals

**Steps:**
1. Enter 10
2. Press ÷
3. Enter 3
4. Press =.

**Expected Result:** 3.333... is shown, rounded to nearest supported precision (e.g., 3.33 or 3.3333333)

### Test Case ID: TC_BODMAS_018

**Description:** Verify BODMAS rule is respectedin mixed operations\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2+3x4
2. Press "="

**Expected Result:** 14 is displayed (Multiplication before addition).

### Test Case ID: TC_EMPTY_019

**Description:** Verify pressing "=" without any input\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Press "="

**Expected Result:** No result is shown 

### Test Case ID: TC_DOUBLE_DOT_019

**Description:** Verify calculator handles multiple decimal points\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2..3
2. press "+"
3. Enter 1
4. Press "="

**Expected Result:** considers only one decimal point .

### Test Case ID: TC_LARGE_NUM_020

**Description:** Verify calculator can handle large number operations\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 999999999
2. press "x"
3. Enter 999999999
4. Press "="

**Expected Result:** 999999998000000001 is displayed or a warning if it exceeds supported range

### Test Case ID: TC_MUL_OPS_021

**Description:** Verify calculator handles a long chained expression correctly\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 2 + 3 - 1 × 5 ÷ 2
2. Press "="

**Expected Result:** 2 + 3 - (1 × 5 ÷ 2) = 2 + 3 - 2.5 = 2.5 (if BODMAS respected)

### Test Case ID: TC_DEC_LEAD_ZERO_022

**Description:** Verify decimal input with leading zero \
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 0.75
2. press "+"
3. Enter 0.25
4. Press "="

**Expected Result:** 1

### Test Case ID: TC_DEC_NO_LEAD_ZERO_023

**Description:** Verify decimal input without leading zero\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter .75
2. press"+"
3. Enter .25
4. Press "="

**Expected Result:** 1.0 or 1 is displayed (if .75 is accepted as valid input or .75 is cosidered as 0.75)

### Test Case ID: TC_REPEATED_OPS_024

**Description:** Verify pressing operator multiple times does not crash calculator.\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 5
2. press"+" twice
3. Enter 2
4. Press "="

**Expected Result:** 7 is displayed; extra operator press is ignored or replaced

### Test Case ID: TC_RESULT_CHAIN_025

**Description:** Verify using the result of one operation in the next without clearing.\
**Preconditions:** Calculator is loaded and finished a valid calculation

**Steps:**
1. Enter 4+5
2. press "="
3. press "x"
4. Enter 2
5. Press "="

**Expected Result:** 18 is displayed

### Test Case ID: TC_MULTIPLE_EQUAL_PRESS_026

**Description:** Verify behavior when = is pressed repeatedly.\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter 4+5
2. press "=" multiple times

**Expected Result:** First press returns 9. Subsequent presses either do nothing or repeat last operation (if feature supported).

### Test Case ID: TC_NEG_ZERO_027

**Description:** Verify calculator correctly interprets negative zero if allowed\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter -0
2. press "+"
3. Enter 5
4. Press "="

**Expected Result:** 5

### Test Case ID: TC_NON_NUMERIC_028

**Description:** Verify calculator rejects alphabetic input and special characters\
**Preconditions:** Calculator is loaded.

**Steps:**
1. Enter A or @
2. press "+"
3. Enter 5
4. Press "="

**Expected Result:** No response when tried to enter non numeric characters


---

### 🔗**Project Demo**
📂 **GitHub**: <https://github.com/nswapna-g19/Test-Cases_calculator-app>