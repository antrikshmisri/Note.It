import NoteInputs from "../components/NoteInputs";

const messages = {
  noteinfo: {
    confirmButtonText: "Add",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    preConfirm: () => {
      return new Promise((resolve) => {
        resolve([
          document.querySelector("input[name = 'title']").value,
          document.querySelector("textarea[name = 'body']").value,
        ]);
      });
    },
    html: <NoteInputs />,
  },
  nullinfo: {
    confirmButtonText: "OK",
    title: "Please add the title",
    showCancelButton: false,
    icon: "error",
  },
};

export default messages;
