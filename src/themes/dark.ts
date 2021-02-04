import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#1f1f1f"
        },
        background: {
            default: "#000000"
        }
    }
});
