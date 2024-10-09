import { useForm } from "react-hook-form";
import { TextInput } from '../../components/text-input/text-input';
import ReactModal from "react-modal";
import { addedFilm, editProduct } from "../../request/request-products";
import { useState } from "react";
import { editFilm } from "../../request/request";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  },
};

export const EditFilm = (props) => {
  const {
    isModalOpen,
    onCloseModal,
    setFilm ,
    id,
    initialValues,
    setIsEdit,
  } = props;
  const [errorForm, setErrorForm] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    editFilm({ ...data, id })
      .then(({ data }) => {
        setFilm((prevValue) => [
          ...prevValue.map((Film) => {
            if (Film.id === id) {
              return { ...  data,id};
            } else {
              return Film;
            }
          }),
        ]);
        onCloseModal({ status: false, id: null });
      })
      .catch(() => setErrorForm(true));
  };

  console.log(initialValues);
  return (
    <ReactModal isOpen={isModalOpen} style={customStyles}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <button
            onClick={() => {
              onCloseModal({ status: false, id: null });
              setErrorForm(false);
            }}
          >
 close
          </button>
        </div>
        <div>
          {errorForm ? (
            <div>Произошла ошибка изменения</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                register={register}
                name={"title"}
                label={"Наименование"}
                validate={{ required: true }}
                errors={errors}
                
              />
              <TextInput
                register={register}
                errors={errors}
                name={"price"}
                label={"Цена"}
                validate={{ required: true }}
              />
              <button>Изменить продукт</button>
            </form>
          )}
        </div>
      </div>
    </ReactModal>
  );
};
