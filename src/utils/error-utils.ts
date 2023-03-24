import {AppActionsType, setErrorAC, setLoadingStatusAC} from "../app/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";


// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setLoadingStatusAC('failed'))
}

export const handleSeverNetworkServer = (dispatch: ErrorUtilsDispatchType,error:{message:string}) => {
    dispatch(setErrorAC(error.message))
    dispatch(setLoadingStatusAC('failed'))
}

type ErrorUtilsDispatchType = Dispatch<AppActionsType>

export type ErrorCustomType = {
    messages: string[]
}