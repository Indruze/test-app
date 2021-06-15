import React, { useState } from "react";
import InfoCard from '../common/InfoCard';
import Button from '../common/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
    const initialValue = [{
          "title": "Tittel",
          "subtitle": "Proin orci justo, vulputate quis ex non, tempus blandit orci. Cras auctor tortor sit\
            amet dui aliquet viverra. Curabitur commodo, enim in aliquet volutpat, tortor arcu\
            rutrum erat, nec tempus augue quam eu felis.",
          "description": "Curabitur id massa quis dolor tincidunt finibus. Mauris commodo velit eleifend lacinia\
            elementum. Phasellus nunc augue, fermentum vitae lorem a, tempor rhoncus nibh. Fusce\
            aliquam, risus eleifend lacinia rhoncus, erat quam aliquam augue, a ornare nibh nibh eget\
            lacus.Maecenas hendrerit ipsum ac mi mattis ultrices. Ut lacinia lacus eget libero luctus laoreet.\
            Duis sit amet tellus euismod, viverra ipsum sed, imperdiet est. Aliquam vulputate venenatis\
            ante, vel posuere nulla ornare ac."
        },
    ]
  
    const [ messages, setMessages ] = useState(initialValue);
    const [ showModal, setShowModal ] = React.useState(false);
    const [ value, setValue ] = React.useState({title: '', subtitle: '', description: ''});

    const handleChange = e => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = e => {
      e.preventDefault();
      addMessage(value);
      setValue("");
      setShowModal(false);
    };

    const addMessage = data => {
      const newMessages = [...messages, { title: data.title, subtitle: data.subtitle, description: data.description }];
      setMessages(newMessages);
    };
  
    return (
        <div className="m-10">
          <h1>Overview</h1>
          <p className="mb-4">For <b>Jesper Knut Sørvaag</b></p>
          <Button
            content="Add Something new"
            onClick={() => setShowModal(true)}
            iconPosition="left"
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="relative w-auto my-6 mx-auto w-10/12 md:w-1/2 h-1/2 md:h-3/4">
                  <div className="border-0 rounded shadow flex flex-col w-full bg-white p-4">
                    <form
                      onSubmit={handleSubmit}
                      className="w-100 px-8 pt-6 pb-8 mb-4"
                    >
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Title
                        </label>
                        <input
                          value={value.title}
                          name="title"
                          type="text"
                          className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Subtitle
                        </label>
                        <textarea
                          value={value.subtitle}
                          type="text"
                          name="subtitle"
                          className="shadow border rounded w-full p-5 focus:outline-none focus:shadow-outline"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Description
                        </label>
                        <textarea
                          value={value.description}
                          type="text"
                          name="description"
                          className="shadow border rounded w-full p-5 focus:outline-none focus:shadow-outline h-52"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Button
                          content="Close"
                          type="clean"
                          onClick={() => setShowModal(false)}
                        />
                        <Button
                          content="Save"
                          submit
                          disabled={!value.title || !value.description}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ): null}
            <div className="flex flex-col lg:flex-row my-10">
              <div className="w-full lg:w-3/4 mr-0 lg:mr-10">
              {messages.map(message => {
                  return (
                      <InfoCard
                          title={message.title}
                          subtitle={message.subtitle}
                          text={message.description}
                      />
                  )
              })}
              </div>
            <div className="w-full lg:w-1/4 mt-12 lg:mt-0">
              <InfoCard
                subtitle="How can we help?"
                text="Sed feugiat venenatis mollis. Aliquam
                  fermentum, enim facilisis finibus suscipit,
                  dolor libero dapibus lorem, eget consequat
                  lacus magna eget neque. "
                  button
              />
            </div>
            </div>
          </div>
    );
}

export default Overview;


                      