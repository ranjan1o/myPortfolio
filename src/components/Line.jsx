import styled from "styled-components"
const A = styled.div`
.line{
width: 100px;
    height: 6px;
    border-radius: 10px;
    background: linear-gradient(
270deg
, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%);
}
`
export function Line() {
    return <A>
        <hr className="line" />
        </A>
}