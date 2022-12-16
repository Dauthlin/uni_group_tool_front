import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import {Form, Header, Message} from "semantic-ui-react";

const renderCheckbox = field => (
  <Form.Checkbox
    checked={!!field.input.value}
    name={field.input.name}
    label={field.label}
    onChange={(e, { checked }) => field.input.onChange(checked)}
  />
);

const renderRadio = field => (
  <Form.Radio
    checked={field.input.value === field.radioValue}
    label={field.label}
    name={field.input.name}
    onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
  />
);

const renderSelect = field => (
  <Form.Select
    label={field.label}
    name={field.input.name}
    onChange={(e, { value }) => field.input.onChange(value)}
    options={field.options}
    placeholder={field.placeholder}
    value={field.input.value}
  />
);

const renderTextArea = field => (
  <Form.TextArea
    {...field.input}
    label={field.label}
    placeholder={field.placeholder}
  />
);



const ProfileForm = props => {
  const { handleSubmit, reset } = props;

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Field
            component={Form.Input}
            label="Minimum team size"
            name="size_of_teams"
            placeholder="Minimum team size"
        />
        <Header as='h2'>Criteria</Header>
        <Header as='h3'>Diversity</Header>
        <Form.Group inline>
          <Field
              component={renderCheckbox}
              label="Average"
              name="diversity_average"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="diversity_average_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="diversity_average_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="diversity_average_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="diversity_average_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="diversity_average_priority"
              radioValue={5}
          />
        </Form.Group>


        <Form.Group inline>
          <Field
              component={renderCheckbox}
              label="Gender: Male"
              name="diversity_gender_male"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="diversity_gender_male_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="diversity_gender_male_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="diversity_gender_male_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="diversity_gender_male_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="diversity_gender_male_priority"
              radioValue={5}
          />
        </Form.Group>

        <Form.Group inline>
          <Field
              component={renderCheckbox}
              label="Gender: Female"
              name="diversity_gender_female"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="diversity_gender_female_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="diversity_gender_female_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="diversity_gender_female_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="diversity_gender_female_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="diversity_gender_female_priority"
              radioValue={5}
          />
        </Form.Group>

        <Form.Group inline>
          <Field
              component={renderCheckbox}
              label="Location: Home"
              name="diversity_location_home"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="diversity_location_home_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="diversity_location_home_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="diversity_location_home_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="diversity_location_home_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="diversity_location_home_priority"
              radioValue={5}
          />
        </Form.Group>
        <Form.Group inline>
          <Field
              component={renderCheckbox}
              label="Location: Online"
              name="diversity_location_online"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="diversity_location_online_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="diversity_location_online_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="diversity_location_online_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="diversity_location_online_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="diversity_location_online_priority"
              radioValue={5}
          />
        </Form.Group>


        <Header as='h3'>types that should be together</Header>
        <Form.Group inline>
          <Field
              component={renderSelect}
              label="Gender: Male"
              name="together_gender_male"
              options={[
                { key: "1", text: "1", value: "1" },
                { key: "2", text: "2", value: "2" },
                { key: "3", text: "3", value: "3" },
                { key: "4", text: "4", value: "4" },
                { key: "5", text: "5", value: "5" },
                { key: "6", text: "6", value: "6" },
                { key: "7", text: "7", value: "7" },
                { key: "8", text: "8", value: "8" },
                { key: "9", text: "9", value: "9" },
                { key: "10", text: "10", value: "10" },
              ]}
              placeholder="Minimum to be together"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="together_gender_male_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="together_gender_male_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="together_gender_male_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="together_gender_male_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="together_gender_male_priority"
              radioValue={5}
          />
        </Form.Group>
        <Form.Group inline>
          <Field
              component={renderSelect}
              label="Gender: Female"
              name="together_gender_female"
              options={[
                { key: "1", text: "1", value: "1" },
                { key: "2", text: "2", value: "2" },
                { key: "3", text: "3", value: "3" },
                { key: "4", text: "4", value: "4" },
                { key: "5", text: "5", value: "5" },
                { key: "6", text: "6", value: "6" },
                { key: "7", text: "7", value: "7" },
                { key: "8", text: "8", value: "8" },
                { key: "9", text: "9", value: "9" },
                { key: "10", text: "10", value: "10" },
              ]}
              placeholder="Minimum to be together"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="together_gender_female_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="together_gender_female_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="together_gender_female_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="together_gender_female_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="together_gender_female_priority"
              radioValue={5}
          />
        </Form.Group>
        <Form.Group inline>
          <Field
              component={renderSelect}
              label="Location: Home"
              name="together_location_home"
              options={[
                { key: "1", text: "1", value: "1" },
                { key: "2", text: "2", value: "2" },
                { key: "3", text: "3", value: "3" },
                { key: "4", text: "4", value: "4" },
                { key: "5", text: "5", value: "5" },
                { key: "6", text: "6", value: "6" },
                { key: "7", text: "7", value: "7" },
                { key: "8", text: "8", value: "8" },
                { key: "9", text: "9", value: "9" },
                { key: "10", text: "10", value: "10" },
              ]}
              placeholder="Minimum to be together"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="together_location_home_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="together_location_home_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="together_location_home_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="together_location_home_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="together_location_home_priority"
              radioValue={5}
          />
        </Form.Group>
        <Form.Group inline>
          <Field
              component={renderSelect}
              label="Location: Online"
              name="together_location_Online"
              options={[
                { key: "1", text: "1", value: "1" },
                { key: "2", text: "2", value: "2" },
                { key: "3", text: "3", value: "3" },
                { key: "4", text: "4", value: "4" },
                { key: "5", text: "5", value: "5" },
                { key: "6", text: "6", value: "6" },
                { key: "7", text: "7", value: "7" },
                { key: "8", text: "8", value: "8" },
                { key: "9", text: "9", value: "9" },
                { key: "10", text: "10", value: "10" },
              ]}
              placeholder="Minimum to be together"
          />
          <label>Priority</label>

          <Field
              component={renderRadio}
              label="lowest"
              name="together_location_online_priority"
              radioValue={1}
          />
          <Field
              component={renderRadio}
              label="low"
              name="together_location_online_priority"
              radioValue={2}
          />
          <Field
              component={renderRadio}
              label="medium"
              name="together_location_online_priority"
              radioValue={3}
          />
          <Field
              component={renderRadio}
              label="high"
              name="together_location_online_priority"
              radioValue={4}
          />
          <Field
              component={renderRadio}
              label="highest"
              name="together_location_online_priority"
              radioValue={5}
          />
        </Form.Group>







        {/*<Form.Group widths="equal">*/}
        {/*  <Field*/}
        {/*    component={Form.Input}*/}
        {/*    label="First name"*/}
        {/*    name="firstName"*/}
        {/*    placeholder="First name"*/}
        {/*  />*/}
        {/*  <Field*/}
        {/*    component={Form.Input}*/}
        {/*    label="Last name"*/}
        {/*    name="lastName"*/}
        {/*    placeholder="Last name"*/}
        {/*  />*/}
        {/*  <Field*/}
        {/*    component={renderSelect}*/}
        {/*    label="Gender"*/}
        {/*    name="gender"*/}
        {/*    options={[*/}
        {/*      { key: "m", text: "Male", value: "male" },*/}
        {/*      { key: "f", text: "Female", value: "female" }*/}
        {/*    ]}*/}
        {/*    placeholder="Gender"*/}
        {/*  />*/}
        {/*</Form.Group>*/}

        {/*<Form.Group inline>*/}
        {/*  <label>Quantity</label>*/}

        {/*  <Field*/}
        {/*    component={renderRadio}*/}
        {/*    label="One"*/}
        {/*    name="quantity"*/}
        {/*    radioValue={1}*/}
        {/*  />*/}
        {/*  <Field*/}
        {/*    component={renderRadio}*/}
        {/*    label="Two"*/}
        {/*    name="quantity"*/}
        {/*    radioValue={2}*/}
        {/*  />*/}
        {/*  <Field*/}
        {/*    component={renderRadio}*/}
        {/*    label="Three"*/}
        {/*    name="quantity"*/}
        {/*    radioValue={3}*/}
        {/*  />*/}
        {/*</Form.Group>*/}

        {/*<Field*/}
        {/*  component={renderTextArea}*/}
        {/*  label="About"*/}
        {/*  name="about"*/}
        {/*  placeholder="Tell us more about you..."*/}
        {/*/>*/}

        {/*<Field*/}
        {/*  component={renderCheckbox}*/}
        {/*  label="I agree to the Terms and Conditions"*/}
        {/*  name="isAgreed"*/}
        {/*/>*/}

        <Form.Group inline>
          <Form.Button primary>Submit</Form.Button>
          <Form.Button onClick={reset}>Reset</Form.Button>
        </Form.Group>
      </Form>
    </Fragment>
  );
};

export default reduxForm({
  form: "profile"
})(ProfileForm);
