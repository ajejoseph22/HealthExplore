import {useState} from 'react';
import Modal from 'react-modal';

function FilterBox({title, data}){
  const [modalIsOpen, setIsOpen] = useState(false);

  let maxDataDisplayed = 7;
  let displayedData = title=='Department'? data.slice(maxDataDisplayed) : data;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="mr-5 mb-5 p-5" style={{width:200, backgroundColor:'white'}}>
      <p className="font-bold pb-2">{title}</p>
      {displayedData.map((type, i)=>{
        return(
          <div className="mt-2 flex flex-row items-center" key={i}>
            <p>{type.key}</p>
            <span className="ml-2 text-gray-500 text-xs">({type.doc_count})</span>
          </div>
        )
      })}
      {data.length > maxDataDisplayed && title=='Department'?
      <div className="mt-2 cursor-pointer text-blue-600" onClick={openModal}>Read more</div>:null}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div>
          <h1 className="font-bold">Department</h1>
          <div className="flex flex-wrap">
            {data.map((type, i)=>{
              return(
                <div className="m-5 flex flex-row items-center" key={i}>
                  <p>{type.key}</p>
                  <span className="ml-2 text-gray-500 text-xs">({type.doc_count})</span>
                </div>
              )
            })}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default FilterBox;
