# ej2-ng-grid-disable-toolbar-buttons

Disabling toolbar buttons based on condition.

## Requirement

Disabling toolbar buttons if grid is empty.

## Solution 

In Grid `dataBound` event currentViewData of grid is checked. Based on the result the toolbar buttons(edit,delete) are disbled. 

## Installing

To install all dependent packages, use the below command

```
npm install
```

## Run sample

To run the sample, use the below command

```
npm start
```