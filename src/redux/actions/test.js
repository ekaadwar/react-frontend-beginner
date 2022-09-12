const books = [
  {
    productCode: 'JS001',
    productName: 'Basic Pemrograman Javascript',
    price: 30000,
  },
  {
    productCode: 'JS002',
    productName: 'Basic React JS',
    price: 50000,
  },
  {
    productCode: 'JS001',
    productName: 'Basic Pemrograman Javascript',
    price: 30000,
  },
  {
    productCode: 'JS001',
    productName: 'Basic Pemrograman Javascript',
    price: 30000,
  },
  {
    productCode: 'JS002',
    productName: 'Basic React JS',
    price: 50000,
  },
  {
    productCode: 'JS003',
    productName: 'Basic NodeJS',
    price: 40000,
  },
]

const collectData = (data) => {
  let arrayCode = []
  let finalResult = []

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      arrayCode.push(data[i].productCode)
    } else {
      if (arrayCode.indexOf(data[i].productCode) === -1) {
        arrayCode.push(data[i].productCode)
      }
    }
  }

  let result = []
  for (let i = 0; i < arrayCode.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].productCode.indexOf(arrayCode[i]) !== -1) {
        result.push(data[j])
      }
    }
    let qtt = result.length
    let total = 0

    for (let j = 0; j < result.length; j++) {
      total += result[j].price
    }

    finalResult.push({
      productCode: result[0].productCode,
      productName: result[0].productName,
      price: result[0].price,
      qtt,
      total,
    })

    qtt = 0
    total = 0
    result = []
  }
  console.log(finalResult)
}

collectData(books)
