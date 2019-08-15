export default {
    "start": [
        {
            "token": "comment",
            "regex": "--.*$"
        },
        {
            "token": "comment",
            "start": "/\\*",
            "end": "\\*/"
        }
    ]
}