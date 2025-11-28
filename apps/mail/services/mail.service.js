import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const MAIL_KEY = 'mailDB'

const gMails = [
  {
    id: 'e101',
    name: 'Momo',
    createdAt: 1714028800000,
    subject: 'Miss you!',
    body: 'Would love to catch up sometime. Been thinking about you lately.',
    isRead: false,
    isStarred: false,
    sentAt: 1714028802000,
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e102',
    name: 'ShopNow',
    createdAt: 1714032400000,
    subject: 'Your order has shipped',
    body: 'Your package is on its way! Expected delivery: 2–3 business days.',
    isRead: true,
    isStarred: false,
    sentAt: 1714032403000,
    removedAt: null,
    from: 'store@shopnow.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e103',
    name: 'Boss',
    createdAt: 1714036000000,
    subject: 'Meeting rescheduled',
    body: 'Reminder: our meeting moved to Thursday.',
    isRead: true,
    isStarred: false,
    sentAt: 1714036002000,
    removedAt: null,
    from: 'boss@work.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e104',
    name: 'Mom',
    createdAt: 1714039600000,
    subject: 'Family update',
    body: 'Hope you’re doing well! The family misses you and can’t wait to meet soon.',
    isRead: false,
    isStarred: false,
    sentAt: 1714039603000,
    removedAt: null,
    from: 'mom@family.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e105',
    name: 'Friend',
    createdAt: 1714043200000,
    subject: 'Beach day moved',
    body: 'Weather looks better on Thursday — let’s go then.',
    isRead: false,
    isStarred: false,
    sentAt: 1714043201000,
    removedAt: null,
    from: 'friend@friends.com',
    to: 'user@appsus.com'
  },

  {
    id: 'e106',
    name: 'Promo',
    createdAt: 1714046800000,
    subject: '🔥 Limited-Time Offer Just for You!',
    body: 'Save 40% today! Huge discounts across all categories. Don’t miss this exclusive offer.',
    isRead: false,
    isStarred: false,
    sentAt: 1714046802000,
    removedAt: null,
    from: 'promo@bigsales.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e107',
    name: 'Spammy',
    createdAt: 1714050400000,
    subject: 'You won a free prize!!! 🎉',
    body: 'Click HERE to claim your reward now! Limited time!',
    isRead: false,
    isStarred: false,
    sentAt: 1714050403000,
    removedAt: null,
    from: 'spammy@unknown.win',
    to: 'user@appsus.com'
  },
  {
    id: 'e108',
    name: 'Torah Weekly',
    createdAt: 1714054000000,
    subject: 'פרשת השבוע - ויצא',
    body: 'שלום! השבוע קוראים את פרשת ויצא...',
    isRead: false,
    isStarred: false,
    sentAt: 1714054002000,
    removedAt: null,
    from: 'torah-weekly@jewishmail.org',
    to: 'user@appsus.com'
  },
  {
    id: 'e109',
    name: 'Noa',
    createdAt: 1714057600000,
    subject: 'שלום, רציתי לשאול',
    body: 'היי, יש לי שאלה לגבי מה שדיברנו...',
    isRead: true,
    isStarred: false,
    sentAt: 1714057603000,
    removedAt: null,
    from: 'noa@gmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e110',
    name: 'Me',
    createdAt: 1714061200000,
    subject: 'Note to myself',
    body: 'Reminder: finish the side project...',
    isRead: false,
    isStarred: false,
    sentAt: 1714061202000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'user@appsus.com'
  },

  {
    id: 'e111',
    name: 'Billing',
    createdAt: 1714064800000,
    subject: 'Invoice for April',
    body: 'Your monthly invoice is ready to view...',
    isRead: false,
    isStarred: false,
    sentAt: 1714064801000,
    removedAt: null,
    from: 'billing@service.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e112',
    name: 'Daniel',
    createdAt: 1714068400000,
    subject: 'Quick question',
    body: 'Hey! Are you free for a short call later today?',
    isRead: true,
    isStarred: false,
    sentAt: 1714068402000,
    removedAt: null,
    from: 'daniel@friends.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e113',
    name: 'Delivery',
    createdAt: 1714072000000,
    subject: 'Your package is waiting',
    body: 'We tried delivering your package...',
    isRead: false,
    isStarred: false,
    sentAt: 1714072003000,
    removedAt: null,
    from: 'delivery@courier.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e114',
    name: 'Security',
    createdAt: 1714075600000,
    subject: 'Security alert',
    body: 'A login attempt was detected...',
    isRead: true,
    isStarred: false,
    sentAt: 1714075602000,
    removedAt: null,
    from: 'security@webmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e115',
    name: 'Lily',
    createdAt: 1714079200000,
    subject: 'Weekend plans?',
    body: 'Any chance you want to plan something fun this weekend?',
    isRead: false,
    isStarred: false,
    sentAt: 1714079203000,
    removedAt: null,
    from: 'lily@friends.com',
    to: 'user@appsus.com'
  },

  {
    id: 'e116',
    name: 'Support',
    createdAt: 1714082800000,
    subject: 'Your subscription expires soon',
    body: 'Your premium subscription expires in 5 days...',
    isRead: false,
    isStarred: false,
    sentAt: 1714082802000,
    removedAt: null,
    from: 'support@premiumplus.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e117',
    name: 'Recruiting',
    createdAt: 1714086400000,
    subject: 'Job opportunity',
    body: 'We reviewed your profile and think you might be a good fit...',
    isRead: false,
    isStarred: false,
    sentAt: 1714086403000,
    removedAt: null,
    from: 'recruiting@hiringnow.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e118',
    name: 'Chef',
    createdAt: 1714090000000,
    subject: 'Recipe you asked for',
    body: 'Here’s the recipe...',
    isRead: true,
    isStarred: false,
    sentAt: 1714090002000,
    removedAt: null,
    from: 'chef@kitchenmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e119',
    name: 'System Admin',
    createdAt: 1714093600000,
    subject: 'System maintenance',
    body: 'Our services will be undergoing maintenance tonight...',
    isRead: false,
    isStarred: false,
    sentAt: 1714093603000,
    removedAt: null,
    from: 'admin@system.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e120',
    name: 'Friend 2',
    createdAt: 1714097200000,
    subject: 'Congrats!',
    body: 'Just wanted to say congratulations!',
    isRead: true,
    isStarred: false,
    sentAt: 1714097202000,
    removedAt: null,
    from: 'friend2@friends.com',
    to: 'user@appsus.com'
  },

  {
    id: 'e121',
    name: 'Yossi Cohen',
    createdAt: 1714100800000,
    subject: 'Meeting Reminder',
    body: 'Don’t forget our meeting tomorrow at 10:00 AM.',
    isRead: false,
    isStarred: false,
    sentAt: 1714100802000,
    removedAt: 1714120000000,
    from: 'yossi@workmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e122',
    name: 'שרה לוי',
    createdAt: 1714104400000,
    subject: 'תזכורת פרויקט',
    body: 'נא להגיש את דוח הפרויקט עד יום חמישי.',
    isRead: false,
    isStarred: false,
    sentAt: 1714104402000,
    removedAt: 1714130000000,
    from: 'sara@hebrewmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e123',
    name: 'ישראל כהן',
    createdAt: 1714108000000,
    subject: 'שיחת צוות',
    body: 'השיחה השבועית נדחתה ליום רביעי בשעה 15:00.',
    isRead: true,
    isStarred: false,
    sentAt: 1714108002000,
    removedAt: 1714140000000,
    from: 'israel@hebrewmail.com',
    to: 'user@appsus.com'
  },
  {
    id: 'e124',
    name: 'פרשת השבוע',
    createdAt: 1714111600000,
    subject: 'פרשת וירא',
    body: 'שלום! השבוע נקרא את פרשת וירא, עם הסברים והערות. שבוע מבורך!',
    isRead: false,
    isStarred: false,
    sentAt: 1714111602000,
    removedAt: 1714150000000,
    from: 'torah-weekly@jewishmail.org',
    to: 'user@appsus.com'
  },
  {
    id: 'e125',
    name: 'Promo',
    createdAt: 1714115200000,
    subject: '🔥 Flash Sale Today Only!',
    body: 'Everything is 50% off! Grab your favorites before midnight.',
    isRead: false,
    isStarred: false,
    sentAt: 1714115202000,
    removedAt: 1714160000000,
    from: 'promo@bigsales.com',
    to: 'user@appsus.com'
  },

  {
    id: 'e126',
    name: 'Me',
    createdAt: 1714170000000,
    subject: 'Project update',
    body: 'I have completed the first draft of the project report.',
    isRead: true,
    isStarred: false,
    sentAt: 1714170002000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'team@workmail.com'
  },
  {
    id: 'e127',
    name: 'Me',
    createdAt: 1714173600000,
    subject: 'Lunch plans',
    body: 'Are you free for lunch tomorrow at 12:30?',
    isRead: true,
    isStarred: false,
    sentAt: 1714173602000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'friend@friends.com'
  },
  {
    id: 'e128',
    name: 'Me',
    createdAt: 1714177200000,
    subject: 'Invoice attached',
    body: 'Please find attached the invoice for last month’s services.',
    isRead: true,
    isStarred: false,
    sentAt: 1714177202000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'client@business.com'
  },
  {
    id: 'e129',
    name: 'Me',
    createdAt: 1714180800000,
    subject: 'Follow up',
    body: 'Just following up on my previous email regarding the proposal.',
    isRead: true,
    isStarred: false,
    sentAt: 1714180802000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'partner@workmail.com'
  },
  {
    id: 'e130',
    name: 'Me',
    createdAt: 1714184400000,
    subject: 'Party Invitation',
    body: 'You’re invited to my birthday party this Saturday at 7 PM!',
    isRead: true,
    isStarred: false,
    sentAt: 1714184402000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'friends@friends.com'
  },
  {
    id: 'e131',
    name: 'Me',
    createdAt: 1714188000000,
    subject: 'Meeting minutes',
    body: 'Attached are the minutes from today’s team meeting.',
    isRead: true,
    isStarred: false,
    sentAt: 1714188002000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'team@workmail.com'
  },
  {
    id: 'e132',
    name: 'Me',
    createdAt: 1714191600000,
    subject: 'Book recommendation',
    body: 'I think you’ll really enjoy the book I mentioned last week.',
    isRead: true,
    isStarred: false,
    sentAt: 1714191602000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'friend@friends.com'
  },
  {
    id: 'e133',
    name: 'Me',
    createdAt: 1714195200000,
    subject: 'Vacation photos',
    body: 'Sharing some photos from my recent trip. Enjoy!',
    isRead: true,
    isStarred: false,
    sentAt: 1714195202000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'family@family.com'
  },
  {
    id: 'e134',
    name: 'Me',
    createdAt: 1714198800000,
    subject: 'Website feedback',
    body: 'Here’s my feedback on the new website design you sent me.',
    isRead: true,
    isStarred: false,
    sentAt: 1714198802000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'designer@workmail.com'
  },
  {
    id: 'e135',
    name: 'Me',
    createdAt: 1714202400000,
    subject: 'Thank you!',
    body: 'Thanks for your help with the project. Really appreciate it.',
    isRead: true,
    isStarred: false,
    sentAt: 1714202402000,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'colleague@workmail.com'
  },

  {
    id: 'e136',
    name: 'Me',
    createdAt: 1714206000000,
    subject: 'Draft: Team Agenda',
    body: 'Need to finalize the agenda for next week’s team meeting.',
    isRead: false,
    isStarred: false,
    sentAt: null,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'team@workmail.com'
  },
  {
    id: 'e137',
    name: 'Me',
    createdAt: 1714209600000,
    subject: 'Draft: תכנון יום הולדת',
    body: 'חושב להזמין את כולם למסיבה בשבת הקרובה.',
    isRead: false,
    isStarred: false,
    sentAt: null,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'friends@friends.com'
  },
  {
    id: 'e138',
    name: 'Me',
    createdAt: 1714213200000,
    subject: 'Draft: חוות דעת על ספר',
    body: 'מנסח חוות דעת קצרה על הספר שסיימתי לקרוא.',
    isRead: false,
    isStarred: false,
    sentAt: null,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'bookclub@friends.com'
  },
  {
    id: 'e139',
    name: 'Me',
    createdAt: 1714216800000,
    subject: 'Draft: Reminder Email',
    body: 'Reminder to check the progress of the pending tasks.',
    isRead: false,
    isStarred: false,
    sentAt: null,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'colleague@workmail.com'
  },
  {
    id: 'e140',
    name: 'Me',
    createdAt: 1714220400000,
    subject: 'Draft: Travel Plans',
    body: 'Planning the itinerary for the upcoming trip; need input.',
    isRead: false,
    isStarred: false,
    sentAt: null,
    removedAt: null,
    from: 'user@appsus.com',
    to: 'family@family.com'
  }
]

const gLoggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus'
}

_createMails()

export const mailService = {
  query,
  get,
  remove,
  save,
  getEmptyMail,
  getDefaultFilter,
  markAsRead
}

function query(filterBy = {}) {
  const { status, isStarred, txt } = filterBy

  return storageService.query(MAIL_KEY).then(mails => {

    if (txt) {
      const regExp = new RegExp(txt, 'i')
      return mails.filter(mail =>
        regExp.test(mail.subject) || regExp.test(mail.body)
      )
    }
    
    if (isStarred && status !== 'trash') {
      return mails.filter(mail => mail.isStarred === true)
    }

    if (status) {
      if (status === 'inbox') {
        mails = mails.filter(mail =>
          mail.to === gLoggedinUser.email && !mail.removedAt
        )
      }
      if (status === 'sent') {
        mails = mails.filter(mail =>
          mail.from === gLoggedinUser.email && mail.sentAt)
      }
      if (status === 'trash') {
        mails = mails.filter(mail => mail.removedAt)
      }
      if (status === 'draft') {
        mails = mails.filter(mail => !mail.sentAt)
      }
    }
    return mails
  })
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

function getDefaultFilter() {
  return {
    status: 'inbox',
    txt: '',
    isRead: false,
    isStarred: false,
    isRemoved: false,
    lables: []
  }
}

function getEmptyMail() {
  return {
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

function markAsRead(mailId) {
  return get(mailId).then(mail => {
    if (!mail.isRead) {
      mail.isRead = true
      return save(mail)
    }
  })
}