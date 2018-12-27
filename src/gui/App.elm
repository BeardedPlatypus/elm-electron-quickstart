module App exposing ( .. )

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

-- Model
type alias Model =
    Int

-- View
view : Model -> Html Msg
view model =
       div [] [ button [ onClick Decrement ] [ text "---" ]
              , div [] [ text (Debug.toString model) ]
              , button [ onClick Increment ] [ text "+++" ]
              ]

-- Update
type Msg
    = Increment
    | Decrement
    | ReplyReceived Int

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( model + 1, Cmd.none )

        Decrement ->
            ( model - 1, Cmd.none )

        ReplyReceived message ->
            let
                _ =
                    Debug.log "ReplyReceived" message
            in
            ( model, Cmd.none )