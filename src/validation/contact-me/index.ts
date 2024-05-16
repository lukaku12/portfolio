const rules = (key: 'name' | 'email' | 'message') => {
    return {
        name: [
            (v: string) => !!v || '_name-is-required',
            (v: string) => (v && v.length <= 100) || '_name-must-be-less-than-100-characters',
        ],
        email: [
            (v: string) => !!v || '_email-field-is-required',
            (v: string) => (v && v.length <= 100) || '_email-field-must-be-less-than-100-characters',
            (v: string) => /.+@.+\..+/.test(v) || '_email-must-be-valid',
        ],
        message: [
            (v: string) => !!v || '_message-is-required',
            (v: string) => (v && v.length >= 15) || '_message-must-be-more-than-15-characters',
            (v: string) => (v && v.length <= 150) || '_message-must-be-less-than-150-characters',
        ],
    }[key]
}

export default rules;