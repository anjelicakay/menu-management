import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../themes/menu/AddMenuItemForm.scss';
import { menuItem } from './Menu';

interface AddMenuItemFormProps {
  onSubmit: (category: "appetizers" | "pasta" | "dessert", values: menuItem) => void;
}

const AddMenuItemForm = (props: AddMenuItemFormProps) => {
  const { onSubmit } = props;

  const initialValues = {
    category: "",
    description: "",
    image: "",
    price: 0,
    title: ""
  };

  const handleOnSubmit = (values: any) => {
    const { category } = values;
    onSubmit(category, values)
  }

  return (
    <div className='add-menu-item-form'>
      <h1 className='add-menu-item-form__header'>Add New Item</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleOnSubmit(values)}
      >
        <Form>
        <div className='add-menu-item-form__container'>
            <label>Category</label>
            <Field
              as="select"
              className="add-menu-item-form__field"
              name="category"
            >
              <option value=""></option>
              <option value="appetizers">Appetizer</option>
              <option value="pasta">Pasta</option>
              <option value="dessert">Dessert</option>
            </Field>
          </div>
          <div className='add-menu-item-form__container'>
            <label>Title</label>
            <Field
              className="add-menu-item-form__field"
              name="title"
              type="text"
            />
          </div>
          <div className='add-menu-item-form__container'>
            <label>Description</label>
            <Field
              className="add-menu-item-form__field"
              name="description"
              type="text"
            />
          </div>
          <div className='add-menu-item-form__container'>
            <label>Price</label>
            <Field
              className="add-menu-item-form__field"
              name="price"
              type="number"
            />
          </div>
          <div className='add-menu-item-form__container'>
            <label>Image</label>
            <Field
              className="add-menu-item-form__file-upload"
              name="image"
              type="text"
            />
          </div>
          <div className='add-menu-item-form__button-container'>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMenuItemForm;
