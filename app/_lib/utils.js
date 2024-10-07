const { useSession } = require("next-auth/react");
export default function userData(){
    const { data: session } = useSession();
    const userData=session;
    return userData
}

