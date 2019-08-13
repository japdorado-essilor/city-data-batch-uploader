export const config = {
    delimiter: "",	// auto-detect
    newline: "",	// auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: true,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    // delimitersToGuess: [',', '\t', '|', ';', parser.RECORD_SEP, parser.UNIT_SEP]
  }

export const rtfcontent = {
    "nodeType": "document",
    "data": {},
    "content": [
      {
        "nodeType": "paragraph",
        "data": {},
        "content": [
          {
            "nodeType": "text",
            "value": "the text is",
            "data": {},
            "marks": []
          },
          {
            "nodeType": "text",
            "value": " very important",
            "data": {},
            "marks": [{
              "type": "bold"
            }
            ]
          }
        ]
      }
    ]
  }

export const accessToken = 'CFPAT-JVbM6CakME_AwvUCxmpgo7UD7ZkLiCVjN-TXzBoJFQ4'
export const script_url = 'http://script.google.com/a/essilor.com/macros/s/AKfycbxZbkvWgCkSpppV0zU0eurjDZvOwHRisActcIoysdmF9TQnryPy/exec?action=read'

export const jsonLink = "https://script.googleusercontent.com/a/macros/essilor.com/echo?user_content_key=Lwf3GmLYhgApbqagxSKit9p14dAQUrp0Q0F649pTizFs7GokSC9QGKWVAMkuoe69ZxiFtXHhHWQkLskkSRdUa1QFbsEQhHuOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_WPhlkJqzkTWr3iVhpFQ-e9XIpf5m9CgHyhoqw0dLbvf2DPXKnqt2FCejLs5PWt54RoDL4NgDP66ZKzGICAeNHQxJ_vwr1vwo79gtyHms854f8SGar5f7tTQJzJD7-LmPdatm7-VSgOM&lib=MNBleVjayO8uE7nRt0-E-bn66hmY7kUZS"
export const spreadSheetLink = "https://docs.google.com/spreadsheets/d/1FAGsd8s6faYHXIYbkxmEhOPxhdpgyFfiW2Ia4KvJfDo/edit#gid=0"
export const contentfulLink = "https://app.contentful.com/spaces/eovf9cm48gyf/entries?id=XNZWFv9AKF860BqL&contentTypeId=cities&contentTypeHidden=false&order.fieldId=updatedAt&displayedFieldIds=updatedAt&displayedFieldIds=author"

export const space = 'eovf9cm48gyf'
export const env = 'master'
export const contentType = 'cities'