import { colors } from "../../styles/theme";
import GitHub from "../Icons/GitHub";

export default function Button({children, onClick}) {
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>

            <style jsx>{`
                button {
                    display: flex;
                    align-items: center;
                    border: 0;
                    color: ${colors.black};
                    border-radius: 30px;
                    font-weight: 700;
                    padding: 14px 24px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: opacity .3s ease;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
                    background-repeat: no-repeat;
                    transition: background-size .3s linear;
                    margin-top: 30px;
                    background-size: 0%;
                    background-image: linear-gradient(to right, ${colors.primary}33, ${colors.primary}33);
                }

                button:hover {
                    background-size: 100%;
                }

                button > :global(svg) {
                    margin-left: 10px;
                }

            `}</style>
        </>
    )
}