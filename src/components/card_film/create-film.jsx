import { useForm } from "react-hook-form";
import { TextInput } from '../../components/text-input/text-input';
import ReactModal from "react-modal";
import { addedFilm } from "../../request/request-products";
import { useState } from "react";

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

export const CreateFilm = (props) => {
  const { isModalOpen, onCloseModal, setFilm } = props;
  const [errorForm, setErrorForm] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    addedFilm(data)
      .then(({ data }) => {
        setFilm((prev) => [...prev, { ...data, title: data.title }]);
        onCloseModal();
      })
      .catch(() => setErrorForm(true));
  };

  return (
    <ReactModal isOpen={isModalOpen} style={customStyles}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <button
            onClick={() => {
              onCloseModal();
              setErrorForm(false);
            }}
          >
 close
          </button>
        </div>
        <div>
          {errorForm ? (
            <div>Произошла ощибка добавления</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                register={register}
                name={"Title"}
                label={"Наименование"}
                validate={{ required: true }}
                errors={errors}
              />
              <TextInput
                register={register}
                errors={errors}
                name={"Genre"}
                label={"ЖАНР"}
                validate={{ required: true }}
              />
              <TextInput
                register={register}
                errors={errors}
                name={"Image"}
                label={"картинка"}
                validate={{ required: true }}
              />
              <button>Добавить продукт</button>
            </form>
          )}
          
        </div>
      </div>
    </ReactModal>
  );
};

