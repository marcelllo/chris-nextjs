import Link from "next/link";
import Users from "../components/Users";

export default function UsersPage() {
    return (
        <>
            <Users />
            <Link href="/">Voltar</Link>
        </>
    )
}