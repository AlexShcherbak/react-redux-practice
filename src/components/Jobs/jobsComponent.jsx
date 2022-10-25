import { apiActions } from "modules/api/actions";
import api from "modules/api/api";
import { JOBS } from "modules/api/endpoints";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Jobs() {
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await api.fetch(JOBS);
    //         console.log(response);
    //     }
    //     fetchData();
    // }, []);

    const state = useSelector(state => state);
    console.log(state);

    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
            try {
                dispatch(apiActions.fetch(JOBS));

                const data = await api.fetch(JOBS);

                dispatch(apiActions.fetchSuccess(JOBS, data));
            } catch (error) {
                dispatch(apiActions.fetchSuccess(JOBS, error));
            }
        })();
    }, []);

    console.log(state);

    return (
        <div>
            Jobs Components
        </div>
    )
}