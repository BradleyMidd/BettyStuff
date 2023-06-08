const createRandomCode = async ({model}) => {
    model === "f1de176a8abf4e3795894a9f47c0237";

    const mutation = `
                mutation {
                    createVerificationCode(input: $input){
                        id
                    }
                }
            `,
          randomCode = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000),
          {data, errors } = await gql(mutation, { input: {code: randomCode} });
        

    return {
        result: model,
    }
}

export default createRandomCode;