{/**import { GetServerSideProps } from "next";

interface IsLoggedInProps {
    isLoggedIn: boolean;
}

export const getServerSideProps: GetServerSideProps<IsLoggedInProps> = async (context) => {
    const isLoggedIn = true; // Replace this with your authentication logic

    if (!isLoggedIn) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        }
    }

    return {
        props: {
            isLoggedIn,
        },
    }
} */}