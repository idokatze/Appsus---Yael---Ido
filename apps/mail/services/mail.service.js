import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAIL_KEY = 'mailDB'

const gMails = [
  {
    id: 'e101',
    createdAt: 1714028800000,
    subject: 'Miss you!',
    body: 'Would love to catch up sometime. Been thinking about you lately.',
    isRead: false,
    sentAt: 1714028802000,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e102',
    createdAt: 1714032400000,
    subject: 'Your order has shipped',
    body: 'Your package is on its way! Expected delivery: 2–3 business days.',
    isRead: true,
    sentAt: 1714032403000,
    removedAt: null,
    from: 'store@shopnow.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e103',
    createdAt: 1714036000000,
    subject: 'Meeting rescheduled',
    body: 'Reminder: our meeting moved to Thursday.',
    isRead: true,
    sentAt: 1714036002000,
    removedAt: null,
    from: 'boss@work.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e104',
    createdAt: 1714039600000,
    subject: 'Family update',
    body: 'Hope you’re doing well! The family misses you and can’t wait to meet soon.',
    isRead: false,
    sentAt: 1714039603000,
    removedAt: null,
    from: 'mom@family.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e105',
    createdAt: 1714043200000,
    subject: 'Beach day moved',
    body: 'Weather looks better on Thursday — let’s go then.',
    isRead: false,
    sentAt: 1714043201000,
    removedAt: null,
    from: 'friend@friends.com',
    to: 'user@appsus.com'
  },

  {
    id: 'e106',
    createdAt: 1714046800000,
    subject: '🔥 Limited-Time Offer Just for You!',
    body: 'Save 40% today! Huge discounts across all categories. Don’t miss this exclusive offer.',
    isRead: false,
    sentAt: 1714046802000,
    removedAt: null,
    from: 'promo@bigsales.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e107',
    createdAt: 1714050400000,
    subject: 'You won a free prize!!! 🎉',
    body: 'Click HERE to claim your reward now! Limited time!',
    isRead: false,
    sentAt: 1714050403000,
    removedAt: null,
    from: 'spammy@unknown.win',
    to: 'user@appsus.com'
  },
  {
    id: 'e108',
    createdAt: 1714054000000,
    subject: 'פרשת השבוע - ויצא',
    body: 'שלום! השבוע קוראים את פרשת ויצא. יעקב יוצא לחרן, חלום הסולם, נישואיו ללאה ורחל ולידת השבטים. מסר השבוע: אמונה ומסירות.',
    isRead: false,
    sentAt: 1714054002000,
    removedAt: null,
    from: 'torah-weekly@jewishmail.org',
    to: 'user@appsus.com'
  },
  {
    id: 'e109',
    createdAt: 1714057600000,
    subject: 'שלום, רציתי לשאול',
    body: 'היי, יש לי שאלה לגבי מה שדיברנו בפעם האחרונה. אפשר רגע?',
    isRead: true,
    sentAt: 1714057603000,
    removedAt: null,
    from: 'noa@gmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e110',
    createdAt: 1714061200000,
    subject: 'Note to myself',
    body: 'Reminder: finish the side project. Break tasks into small chunks and focus.',
    isRead: false,
    sentAt: 1714061202000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e111',
    createdAt: 1714064800000,
    subject: 'Invoice for April',
    body: 'Your monthly invoice is ready to view. Log into your account to download the PDF.',
    isRead: false,
    sentAt: 1714064801000,
    removedAt: null,
    from: 'billing@service.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e112',
    createdAt: 1714068400000,
    subject: 'Quick question',
    body: 'Hey! Are you free for a short call later today?',
    isRead: true,
    sentAt: 1714068402000,
    removedAt: null,
    from: 'daniel@friends.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e113',
    createdAt: 1714072000000,
    subject: 'Your package is waiting',
    body: 'We tried delivering your package but you weren’t home. Please schedule redelivery.',
    isRead: false,
    sentAt: 1714072003000,
    removedAt: null,
    from: 'delivery@courier.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e114',
    createdAt: 1714075600000,
    subject: 'Security alert',
    body: 'A login attempt was detected from a new device. If this wasn’t you, reset your password.',
    isRead: true,
    sentAt: 1714075602000,
    removedAt: null,
    from: 'security@webmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e115',
    createdAt: 1714079200000,
    subject: 'Weekend plans?',
    body: 'Any chance you want to plan something fun this weekend?',
    isRead: false,
    sentAt: 1714079203000,
    removedAt: null,
    from: 'lily@friends.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e116',
    createdAt: 1714082800000,
    subject: 'Your subscription expires soon',
    body: 'Your premium subscription expires in 5 days. Renew now to avoid interruptions.',
    isRead: false,
    sentAt: 1714082802000,
    removedAt: null,
    from: 'support@premiumplus.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e117',
    createdAt: 1714086400000,
    subject: 'Job opportunity',
    body: 'We reviewed your profile and think you might be a good fit for an open position. Let us know if you’d like more details.',
    isRead: false,
    sentAt: 1714086403000,
    removedAt: null,
    from: 'recruiting@hiringnow.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e118',
    createdAt: 1714090000000,
    subject: 'Recipe you asked for',
    body: 'Here’s the recipe: 2 cups flour, 3 eggs, 1/2 cup sugar… enjoy!',
    isRead: true,
    sentAt: 1714090002000,
    removedAt: null,
    from: 'chef@kitchenmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e119',
    createdAt: 1714093600000,
    subject: 'System maintenance',
    body: 'Our services will be undergoing maintenance tonight from 01:00 to 05:00. Some features may be unavailable.',
    isRead: false,
    sentAt: 1714093603000,
    removedAt: null,
    from: 'admin@system.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e120',
    createdAt: 1714097200000,
    subject: 'Congrats!',
    body: 'Just wanted to say congratulations on your achievement! Really happy for you.',
    isRead: true,
    sentAt: 1714097202000,
    removedAt: null,
    from: 'friend2@friends.com',
    to: 'user@appsus.com'
  }
]

_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
}

function query() {
    return storageService.query(MAIL_KEY)
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail() {
    return   {
    id: '',
    createdAt: new Date.now(),
    subject: '',
    body: '',
    isRead: false,
    sentAt: '',
    removedAt: null,
    from: '',
    to: ''
  }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = gMails
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}

function _createMail() {
    const mail = getEmptyMail()
    mail.id = makeId()
    return mail
}