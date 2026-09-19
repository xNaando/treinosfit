// Gera o payload "Pix copia e cola" (padrão BR Code / EMV do Banco Central)

const PIX_KEY = '10098326627' // chave CPF sem formatação — fica embutida no código
const MERCHANT_NAME = 'TREINOS FIT'
const MERCHANT_CITY = 'BRASIL'
const TXID = 'TREINOSFIT'

function emv(id, value) {
  return id + String(value.length).padStart(2, '0') + value
}

// CRC16-CCITT (0xFFFF) exigido no campo 63 do BR Code
function crc16(str) {
  let crc = 0xffff
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1
      crc &= 0xffff
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

// amount em reais (ex.: 10.5) ou null pra valor livre
export function pixPayload(amount = null) {
  let payload =
    emv('00', '01') +
    emv('26', emv('00', 'br.gov.bcb.pix') + emv('01', PIX_KEY)) +
    emv('52', '0000') +
    emv('53', '986') +
    (amount ? emv('54', amount.toFixed(2)) : '') +
    emv('58', 'BR') +
    emv('59', MERCHANT_NAME) +
    emv('60', MERCHANT_CITY) +
    emv('62', emv('05', TXID)) +
    '6304'
  return payload + crc16(payload)
}
