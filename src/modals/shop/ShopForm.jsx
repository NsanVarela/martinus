/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import React from 'react';

import { useForm, Form } from '../../Components/useForm';
import Controls from '../../Components/controls/Controls';

const genderItems = [
  {
    id: 'male',
    title: 'Homme',
  },
  {
    id: 'female',
    title: 'Femme',
  },
];
const itemNumber = [
  {
    id: '1',
    title: 'Un',
  },
  {
    id: '2',
    title: 'Deux',
  },
  {
    id: '3',
    title: 'Trois',
  },
  {
    id: '4',
    title: 'Quatre',
  },
  {
    id: '5',
    title: 'Cinq',
  },
];
const initialFieldsValues = {
  lastName: ``,
  firstName: ``,
  city: ``,
  email: ``,
  phoneNumber: ``,
  gender: '',
  itemNumber: '',
  messageDate: new Date(),
};

export default function ShopForm(props) {
  const { filledForm } = props;
  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    const firstNameRegex = /^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/;
    const emailRegex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    // const messageRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    if ('firstName' in fieldValues)
      temp.firstName = firstNameRegex.test(fieldValues.firstName) ? `` : `Un prénom facilitera nos échanges`;
    if ('email' in fieldValues) temp.email = emailRegex.test(fieldValues.email) ? `` : `Votre email n'est pas valide`;
    // if ('message' in fieldValues)
    //   temp.message = messageRegex.test(fieldValues.message) ? `Votre message ne peut pas contenir d'url` : ``;
    setErrors({
      ...temp,
    });
    if (fieldValues === values) return Object.values(temp).every(x => x === ``);
  };
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initialFieldsValues, true, validate);
  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) filledForm(values, resetForm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Controls.Input
        name="lastName"
        label="Nom"
        value={values.lastName}
        onChange={handleInputChange}
        error={errors.lastName}
      />
      <Controls.Input
        name="firstName"
        label="Prénom"
        value={values.firstName}
        onChange={handleInputChange}
        error={errors.firstName}
      />
      <Controls.Input label="Ville" name="city" value={values.city} onChange={handleInputChange} error={errors.city} />
      <Controls.Input
        name="email"
        label="Email"
        value={values.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <Controls.Input
        name="phoneNumber"
        label="Téléphone"
        value={values.phoneNumber}
        onChange={handleInputChange}
        error={errors.phoneNumber}
      />
      <Controls.RadioGroup
        name="gender"
        label="Genre"
        value={values.gender}
        onChange={handleInputChange}
        items={genderItems}
      />
      <Controls.Select
        name="itemNumber"
        label="Nombre de t-shirt"
        value={values.itemNumber}
        onChange={handleInputChange}
        options={itemNumber}
      />
      <div>
        <Controls.Button type="submit" text="Valider" onClick={validate} />
        <Controls.Button text="Réinitialiser" color="default" onClick={resetForm} />
      </div>
    </Form>
  );
}
