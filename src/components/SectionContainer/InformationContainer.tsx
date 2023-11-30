import getCurrentUser from "@/actions/getCurrentUser";


const InformationContainer = async () => {

    const session = await getCurrentUser()

    return (
        <div>

        </div>
    );
}

export default InformationContainer;