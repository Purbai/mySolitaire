# Solitaire Game Walkthrough

Walkthrough of the solitarie game reproduction with basic funcationality and styling

## HTML Content
- [ ] Create full HTML skeleton
- [ ] A container element, for styling and layout
- [ ] A button to start/stop the game
- [ ] 13 columns
    - [ ] for columns 1-7 for cards laid out
    - [ ] columns 8-11 for foundation file
    - [ ] column 12 for the remaining cards pile
    - [ ] column 13 for displaying cards from the remaining cards pile

## SCCS layout and styling
- layout
    - [ ] display with 3 columns
        - [ ] remaining cards pile
            - [ ] 2 column
        - [ ] cards laid out
            - [ ] 7 columns
            - [ ] cards overlap each other in the column

        - [ ] foundation pile
            - [ ] 4 columns
            - [ ] each columns represent card suit

## TS logic

-   [ ] Capturing the elements that need to be interacted with:

    - [ ] cards laid out
            - [ ] top card in each column is faced-up showing the card value
            - [ ] all remaining cards are faced down 
            - [ ] cards which are faced up can be moved to another column
            - [ ] cards whcih are faced up can be moved to foundational pile
            - [ ] card can only be moved if it moved to a column which contains the card of opposite colour and is higher by 1 value (ie 2 of spades can be moved to 3 of Ace but not on top 3 of clubs)

    - [ ] foundational pile
        - [ ] start with empty pile
        - [ ] Ace is the first card that can be moved to the column
        - [ ] every card in the column must be the same colour and suit
        - [ ] cards are faced up
        - [ ] any card moved must be only 1 higher in value to the top card in the column
    - [ ] remaining cards pile
        - [ ] cards are faced down in a pile
        - [ ] cards drawn are moved to second pile
            - [ ] top card is faced up
            - [ ] card can be moved to the foundation pile



# Tic Tac Toe

Walkthrough of the Tic Tac Toe game reproduction with basic funcationality and styling

## HTML
-   [ ] Create full HTML skeleton

    -   [ ] A container element, for styling and layout
    -   [ ] Button to start game
    - [ ] user to select if they want to be X or O

##  SCCS layout and styling

- layout
    - [ ] grid (3 rows by 3 columns)
        - [ ] white for background
        - [ ] black solid for internal grid lines 
        - [ ] X/O centre align


## TS logic
-   [ ] Capturing the elements that need to be interacted with:
    - [ ] add listener on button to reset the game
    - [ ] add user input selection to choice either X or O symbol
    - [ ] when user clicks on the grid cell, place the chosen symbol in the cell
    - [ ] user can only click on cell which is empty
    - [ ] if 3 cells either vertical, horizontal or diagonally have the user's chosen symbol then display "You Won!
    - [ ] computer to chose the grid cell would stop the user's 3 in row else  get random grid position which is empty to place the symbol 
    - [ ] if 3 cells either vertical, horizontal or diagonally have the computer symbol then display "You Loss!
    - [ ] 