import { useEffect } from "react"
import { useUser } from "../context/UsersContext";
import { useNavigate } from "react-router";

export default function VerifyEmail() {
    const { verifyEmail } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        const verify = async () => {
           await verifyEmail();
            navigate('/app')
        }

        verify();
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden page-bg-light">
        </div>

    )
}