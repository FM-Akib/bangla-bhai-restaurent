import { useLoaderData } from "react-router-dom";

const EditItem = () => {
    const updateItem = useLoaderData();
    console.log(updateItem);
    return (
        <div>
            this is edit item
            
        </div>
    );
};

export default EditItem;