import Link from "next/link";

export default async function Users() {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();
    return (
        <>
            <h1>Users</h1>
            <table style={{ width: '100%'}}>
                <tr>
                    <th align="left">Nome</th>
                    <th align="left">E-mail</th>
                </tr>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </table>
            <Link href="/">Voltar</Link>
        </>
    )
}