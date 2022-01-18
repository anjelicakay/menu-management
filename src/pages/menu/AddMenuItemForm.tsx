import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../themes/menu/AddMenuItemForm.scss';
import { menu, menuItem } from '../../utils/constants';

export interface AddMenuItemFormProps {
  menu: menu;
  onSubmit: (values: menuItem) => void;
}

const AddMenuItemForm = (props: AddMenuItemFormProps) => {
  const { menu, onSubmit } = props;

  const initialValues = {
    category: "",
    description: "",
    image: "",
    price: 0,
    title: ""
  };

  const handleOnSubmit = (values: any) => {
    onSubmit(values)
  }

  return (
    <div className='add-menu-item-form' data-testid="add-new-item-form">
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
              data-testid="item-input-category"
              name="category"
            >
              <option disabled selected value="">Select your category</option>
              {menu.categories.map((category) => {
                return (
                  <option value={category}>{category}</option>
                )
              })}
            </Field>
          </div>
          <div className='add-menu-item-form__container'>
            <label>Title</label>
            <Field
              className="add-menu-item-form__field"
              data-testid="item-input-title"
              name="title"
              type="text"
            />
          </div>
          <div className='add-menu-item-form__container'>
            <label>Description</label>
            <Field
              className="add-menu-item-form__field"
              data-testid="item-input-description"
              name="description"
              type="text"
            />
          </div>
          <div className='add-menu-item-form__container'>
            <label>Price</label>
            <Field
              className="add-menu-item-form__field"
              data-testid="item-input-price"
              name="price"
              type="number"
            />
          </div>
          <div className='add-menu-item-form__container'>
            <label>Image</label>
            <Field
              className="add-menu-item-form__file-upload"
              data-testid="item-input-image"
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
