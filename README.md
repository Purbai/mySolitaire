# Solitaire Game Walkthrough

Walkthrough of the solitaire game reproduction with basic funcationality and styling

## HTML Content
- [x] Create full HTML skeleton
- [x] A container element, for styling and layout
- [x] A button to start/stop the game
- [x] 13 columns
    - [x] for columns 1-7 for cards laid out
    - [x] columns 8-11 for foundation file
    - [x] column 12 for the remaining cards pile
    - [x] column 13 for waste pile 

## SCCS layout and styling
- layout
    - [x] display with 3 columns
        - [x] remaining cards pile
            - [x] 2 column (remaining & waste piles)
        - [x] cards laid out
            - [x] 7 columns
            - [x] cards overlap each other in the column

        - [x] foundation pile
            - [x] 4 columns 
            - [x] each columns represent card suit

## TS logic

-   [ ] Capturing the elements that need to be interacted with:

    - [] Setup data required to create the deck
        - [x] colours
        - [x] suit
        - [x] card value
    - [] Capture game start
        - [x] create the deck from colour, suit and card value
        - [] change the button label to stop game change if game started, else start game
    - [ ] solitaire cards
            - [x] top card in each column is faced-up showing the card value
            - [x] all remaining cards are faced down 
            - [x] card(s) which are faced up can be moved to another column
            - [x] card which is faced up can be moved to foundational pile
            - [x] only King can be moved to an empty column
            - [x] card can only be moved if it moved to a column which contains the card of opposite colour and is higher by 1 value (ie 2 of spades can be moved to 3 of Ace but not on top 3 of clubs)
            - [x] a faced-up card can be selected which has cards on top to be moved to another column as long as it meets the move logic (card is different colour and higher than the bottom card being moved) - selected card and any cards on top will be moved to the new column
    - [ ] foundational pile
        - [x] start with empty pile
        - [x] Ace is the first card that can be moved to the column
        - [x] every card in the column must be the same colour and suit
        - [x] top cards are faced up
        - [x] any card moved must be only 1 higher in value to the top card in the column
    - [ ] remaining cards pile
        - [x] cards are faced down in a pile
        - [x] cards drawn are moved to second pile
            - [x] top card is faced up
            - [x] card can be moved to the foundation pile
            - [] when K is moved to the solitaire empty column, the top card in the waste pile is not faced-up
            - [] cards which have been faced-up are not getting reset to face down when the next set of cards are moved from remaining pile to waste and a card is moved to solitaire column
            - [x] 3 cards can me moved from remaining pile to waste pile
            - [x] clicking empty remaining pile will move all cards from waste pile to remaining pile
