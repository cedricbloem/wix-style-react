export const basicExample = `
 class MyComponent extends React.Component {

  state= { value: 3 };

  render() {
    const { value } = this.state;

    return (
      <StarsRatingBar
          value={value}
          onChange={ (rating) => this.setState({ value: rating })}
        />
      );
   }
 }
`;

export const readOnlyExample = `<StarsRatingBar value={3} readOnly={true} />`;

export const sizesExample = `
      <Layout>
        <Cell>
          <StarsRatingBar value={2} readOnly={true} size="tiny" />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} readOnly={true} size="small" />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} readOnly={true} size="medium" />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} readOnly={true} size="large" />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} size="large" />
        </Cell>
      </Layout>
`;

export const rateCaptionsExample = `
  class MyComponent extends React.Component {

    state= { value: 4 };

    render() {
      const rateCaptions = ['bad', 'not good', "ok", "good", "excellent" ];
      const { value } = this.state;

      return (
        <StarsRatingBar
          rateCaptions={rateCaptions}
          value={value}
          onChange={ (rating) => this.setState({ value: rating })}
        />
      );
    }
  }
`;