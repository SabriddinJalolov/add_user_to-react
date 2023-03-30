import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FadeLoader } from "react-spinners";
const API_PATH =
    "https://64208e8f25cb6572104bbb0f.mockapi.io/employee/employee";

function Employee() {
    const [modal, setModal] = React.useState(false);
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [employees, setEmployees] = React.useState([]);
    const [selectedId, setSelectedId] = React.useState("");
    const [selectedItem, setSelectedItem] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isLoader, setIsLoader] = React.useState(true);

    const getEmployees = async () => {
        try {
            const res = await fetch(API_PATH);
            const data = await res.json();
            setEmployees(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoader(false);
        }
    };

    const addEmployee = async (evt) => {
        evt.preventDefault();
        const [first_name, last_name, age, salary, position] =
            evt.target.elements;
        if (selectedItem.id) {
            try {
                const res = await fetch(API_PATH + "/" + selectedItem.id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: first_name.value,
                        last_name: last_name.value,
                        age: age.value,
                        salary: salary.value,
                        position: position.value,
                    }),
                });
                const data = await res.json();
                getEmployees();
                setSelectedItem({});
                setIsSubmitting(true);
                toast.success("Muvaffaqiyatli o'zgartirildi!");
                setModal(false);
            } catch (error) {
                toast.error(error.message);
                console.log(error.message);
            }
        } else {
            try {
                const res = await fetch(API_PATH, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_name: first_name.value,
                        last_name: last_name.value,
                        age: age.value,
                        salary: salary.value,
                        position: position.value,
                    }),
                });
                const data = await res.json();
                setModal(false);
                getEmployees();
                setIsSubmitting(true);
                toast.success("Muvaffaqiyatli qo'shildi!");
            } catch (error) {
                toast.error(error.message);
            }
            setIsSubmitting(false);
        }

        evt.target.reset();
    };

    const deleteEmployee = (id) => {
        setSelectedId(id);
        setDeleteModal(!modal);
    };

    const deleteEmployeeOriginal = async () => {
        try {
            const res = await fetch(API_PATH + "/" + selectedId, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            getEmployees();
            setDeleteModal(false);
            toast.success("Muvaffaqiyatli o'chirildi!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const editEmployee = (item) => {
        setSelectedItem(item);
        console.log(item)
        setModal(true);
    };

    React.useEffect(() => {
        getEmployees();
    }, []);
    return (
        <>
            <div className='loader'>
                <div>
                    <FadeLoader size={400} color='red' loading={isLoader} />
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 my-5'>
                        <button
                            className='btn btn-primary d-block ms-auto'
                            onClick={() => setModal(true)}>
                            Add
                        </button>
                    </div>
                    {employees &&
                        employees.length > 0 &&
                        employees.map((employee) => (
                            <div className='col-4 mb-3' key={employee.id}>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h2 className='card-title'>
                                            {employee.first_name +
                                                " " +
                                                employee.last_name}
                                        </h2>
                                    </div>
                                    <div className='card-body'>
                                        <h3>Age: {employee.age}</h3>
                                        <h3>Position: {employee.position}</h3>
                                        <h3>Salary: $ {employee.salary}</h3>
                                    </div>
                                    <div className='card-footer d-flex justify-content-between'>
                                        <button
                                            className='btn btn-primary'
                                            type='button'
                                            onClick={() =>
                                                editEmployee(employee)
                                            }>
                                            Edit
                                        </button>
                                        <button
                                            className='btn btn-danger'
                                            type='button'
                                            onClick={() =>
                                                deleteEmployee(employee.id)
                                            }>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader>
                    <h2 className='text-center'>Add Employee</h2>
                </ModalHeader>
                <form onSubmit={(evt) => addEmployee(evt)}>
                    <ModalBody>
                        <input
                            className='form-control mb-3'
                            type='text'
                            name='first_name'
                            defaultValue={selectedItem?.first_name}
                            placeholder='Enter your firstname'
                        />
                        <input
                            className='form-control mb-3'
                            type='text'
                            name='last_name'
                            defaultValue={selectedItem?.last_name}
                            placeholder='Enter your lastname'
                        />
                        <input
                            className='form-control mb-3'
                            type='number'
                            name='age'
                            placeholder='Enter your age'
                        />
                        <input
                            className='form-control mb-3'
                            type='number'
                            name='salary'
                            placeholder='Enter your salary'
                        />
                        <select className='form-select' name='position'>
                            <option>Enter your position</option>
                            <option value='CEO'>CEO</option>
                            <option value='CTO'>CTO</option>
                            <option value='CMO'>CMO</option>
                            <option value='Product Owner'>Product Owner</option>
                            <option value='Software Engineer'>
                                Software Engineer
                            </option>
                            <option value='Security'>Security</option>
                            <option value='Driver'>Driver</option>
                            <option value='Shef'>Shef</option>
                        </select>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            className='btn btn-primary'
                            type='submit'
                            disabled={isSubmitting}>
                            Save
                        </button>
                        <button
                            className='btn btn-secondary'
                            type='button'
                            onClick={() => setModal(false)}>
                            Cancel
                        </button>
                    </ModalFooter>
                </form>
            </Modal>

            <Modal
                isOpen={deleteModal}
                toggle={() => deleteEmployee()}
                size='lg'>
                <ModalHeader>
                    <h2>Rostdan ham o'chirmoqchimisiz?</h2>
                </ModalHeader>
                <ModalFooter>
                    <button
                        className='btn btn-danger'
                        type='button'
                        onClick={() => deleteEmployeeOriginal()}>
                        Ha🥲
                    </button>
                    <button
                        className='btn btn-secondary'
                        type='button'
                        onClick={() => setDeleteModal(false)}>
                        Yo'q😃
                    </button>
                </ModalFooter>
            </Modal>
            <ToastContainer />
        </>
    );
}

export default Employee;
