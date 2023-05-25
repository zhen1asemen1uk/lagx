import { NavLink, useRouteError } from "react-router-dom";
import { Col, FlexBlock } from "../reusable/styles";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error && error);

    return (
        <Col ai="center" jc="space-between" h="100vh">
            <h1>Oops!</h1>

            <p>Sorry, an unexpected error has occurred.</p>
            <FlexBlock c="red">
                {error ? error?.status || error?.message : ``}
            </FlexBlock>
            <p>
                <NavLink to={`/`}>Go main</NavLink>
            </p>
        </Col>
    );
};

export default ErrorPage;
