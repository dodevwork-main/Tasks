import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";


const DoDevWork = () => {
    return (
        <Stack
            sx={(theme) => ({
                color: theme.palette.primary.light,
                "&:hover": {
                    color: "white",
                }
            })}
        >
            <Link
                color="inherit"
                underline="none"
                target="_blank"
                href="https://github.com/dodevwork-main"
            >
                @dodevwork
            </Link>
        </Stack>
    );
};

export default DoDevWork;