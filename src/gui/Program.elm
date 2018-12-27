port module Program exposing (main)

import Browser

import App exposing (..)


port hello : String -> Cmd msg
port reply : (Int -> msg) -> Sub msg


type alias Flags =
    ()


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( 0, hello "World" )

subscriptions : Model -> Sub Msg
subscriptions model =
    reply ReplyReceived

main : Program Flags Model Msg
main =
  Browser.element { init = init
                  , view = view
                  , update = update
                  , subscriptions = subscriptions
                  }