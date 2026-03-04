import blogFreshBeginning from '@/assets/blog-fresh-beginning.jpg';
import blogGrowIncome from '@/assets/blog-grow-income.jpg';
import blogInvestLikePro from '@/assets/blog-invest-like-pro.jpg';
import blogMoneyLove from '@/assets/blog-money-love.jpg';
import blogBudgetTogether from '@/assets/blog-budget-together.jpg';
import blogMindYourMoney from '@/assets/blog-mind-your-money.jpg';
import blogNeverWindowShop from '@/assets/blog-never-window-shop.jpeg';
import blogValentineMoney from '@/assets/blog-valentine-money.jpg';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'a-two-year-old-understands-ownership',
    title: 'A Two Year Old Understands Ownership',
    excerpt: 'The "personal" in Personal Financial Management simply means that what will work for one person may not work for another. You need to customize the financial advice you receive to match your personality.',
    content: `How do I know this? I have 8 nieces and nephews and with every single one of them we have had heated arguments about my relationship with their parents. I would call their parent my brother or my sister and the little one would counter my claim with a clear "No. That is my mummy/daddy".

The argument would go back and forth and when the child would be close to or already in tears, my sibling would disown me in public and support their offspring by declaring they were the parents of the child and not my sibling! The hardest blow is when those little supposed bundles of joy would insist my mother is their grandmother and alas my mother would also denounce me in preference to her grandchildren. In conclusion, a two year old knows what belongs to them and knows as well that their property is exclusive and cannot be claimed by anyone else - not even their favourite aunt.

Which brings us back to your finances. The 'personal' in Personal Financial Management simply means that what will work for one person may not work for another person. Therefore, you need to customize the financial advice you receive to match your personality and the season of life that you are in at that moment. For some, saving comes easily while for others, it is a struggle. So wherever you are on your journey, now is the best time to start managing your finances.

If you exist in blissful ignorance, not knowing when your credit card, loan or mortgage is due, you will be in for an unpleasant surprise when the debt collectors come calling. It is quite frustrating to live pay check to pay check such that if the Accountant delays to submit the salary cheque to the bank even by a day, there is a crisis in your life.

When I want to start a war with my nieces and nephews, I take something of theirs, a toy, my sibling or even my mum, and say 'mine'. They will stop whatever they are doing to come and prove to me that the property I am claiming actually does belong to them and I have no say over it. The same applies to your finances. They are 'yours'. Whether you have 1 shilling or 1 million shillings in your account, it is yours. No need to be embarrassed about it.

That said, let us start with budgeting. As a finance practitioner, I was busy working on the monthly budget review one day trying to beat my boss' deadline. Her next question startled me, "Now that you are about to conclude working on the organisation's budget, have you updated your own budget?"

I did not even have a personal budget leave alone monthly updates. I mumbled some excuse but immediately I hit 'send' on the email to submit the company budget, I picked up a pen and paper and did my personal budget. I decided to split my salary into 10ths:

• 30% automatically went to the government as income tax
• 10% to church/charity
• 10% to savings
• 10% for me to buy my favourite treats

**Action Point:**

This weekend, do a quick budget of your own. Pen and paper, simple excel sheet - just get started!`,
    date: 'May 15, 2019',
    author: 'Susan Nyakiamo',
    category: 'Budgeting',
    readTime: '6 min read',
    image: blogFreshBeginning,
  },
  {
    id: 'do-not-despise-money',
    title: 'Do Not Despise Money',
    excerpt: '"Do not despise money, my child, because if you do, it will despise you right back." And since money does not need you but you need it, this relationship is grossly skewed in favour of money.',
    content: `"Do not despise money, my child, because if you do, it will despise you right back." And since money does not need you but you need it, this relationship is grossly skewed in favour of money.

This sound advice was from my mum. According to her, whether it is the smallest denomination or the largest, money appreciates respect.

**Turning Debt on its Head**

Instead of starting with those debts you are already servicing, start with the ones we have neglected. The loans you receive from friends and family who do not pressure you to pay off. After some time, you forget all about them but trust me, the creditor does not forget. Each time they remember you, they will be thinking of what an ungrateful person you are.

So today, take your pen and paper and write down all the creditors you can remember and how much you owe them. Next you should determine how much you will be paying to each one on a monthly basis. If you owe me 1 million shillings and you refund me 10 shillings a month, I will probably insult you because at that rate it will take 4 generations of your family to clear the debt. But here is the catch, I will not refuse to take the 10 shillings.

That particular wisdom I learnt from the book "The Richest Man in Babylon" by George Samuel Clason.

So the pride of cash will not allow your creditor to refuse whatever payment you make towards your debt. As a bonus, you will be able to hold your head high in society since you will no longer be known as the bad debtor but as someone who is doing their best to honour their debt.

**Debt Snowballing**

The debt-snowball method is a debt reduction strategy, whereby one who owes on more than one account pays off the accounts starting with the smallest balances first, while paying the minimum payment on larger debts. Once the smallest debt is paid off, one proceeds to the next slightly larger small debt above that, so on and so forth.

**The steps to follow are:**

1. List all your debts in order of amount and repayment period
2. List the minimum amount to be paid on each debt
3. Ensure you faithfully remit the minimum payment for each debt except the smallest one
4. Whenever you get some extra cash you pay the extra towards reducing the smallest loan
5. Once you complete paying off the smallest loan, increase your payments for the next smallest loan
6. Keep doing this until you are debt free

**Action Points:**

1. Make a plan for repayment of loans from your friends and family
2. Get yourself a copy of the book "The Richest Man in Babylon" by George Clason
3. Organise your mainstream debts for a snowball repayment plan`,
    date: 'June 5, 2019',
    author: 'Susan Nyakiamo',
    category: 'Finance',
    readTime: '7 min read',
    image: blogMoneyLove,
  },
  {
    id: 'taming-your-spending',
    title: 'You Are Single With No Children. What Do You Do With Your Whole Salary?',
    excerpt: 'Did any of your well-meaning friends and relatives ever ask you this question after you started your first job? In my whole life, I have not been asked a more irritating question than this.',
    content: `Did any of your well meaning friends and relatives ever ask you this question after you started your first job? In my whole life, I have not been asked a more irritating question than this. And I do not ask it of anyone, unless I am trying to irritate, of course :)

How you spend your money should be according to your own personal judgement. In the beginning I talked about making my own first budget and I based it on my gross salary instead of the net. This was deliberate so I could have some perspective about how much I contribute to the government and how much I spend on myself and others.

Let me perform a magic trick and guess the one thing you did not budget for. Bank charges. As an accountant, my first budget had expenses allocated to the last cent. So it came as a surprise when I realised I was falling short every month until I identified the culprit - bank charges. They are individually small but they add up fast.

To try and improve my outlook on my income distribution, I decided to classify my expenditure into:

1. Investments
2. Savings
3. Debts
4. Spending
5. Tax

**How to tame spending:**

Once you have your list of expenses, it is time to decide how you are going to stay within budget. I have gathered 3 that I find simple and useful:

**The envelope method:** Buy envelopes and write the expense title on the envelope eg food, bus fare, entertainment, hair, make-up, clothes, shoes, rent etc. Every time you need to spend for a particular expense, you collect cash from the respective envelope. When the envelope is empty, you can no longer spend on that item. This is wonderful for controlling impulse purchases especially shoes and clothes.

**Automation:** I do not recommend automation of expenses because you tend to forget to cancel subscriptions when you no longer need them. However, they are very useful for paying debts, saving, and investments. One reason it does not pain us to pay taxes is because they are deducted at source.

**Cheques:** If you have a cheque book for your account, go ahead and use it. Issue post dated cheques to your debtors, write cheques to deposit in your savings or investment accounts. Let those clear first and then spend whatever remains in your account.

**Action Points:**

• Collect all your bank statements, mobile banking statements and calculate the total cost of money transfer
• Add it as an expense item to your budget`,
    date: 'July 3, 2019',
    author: 'Susan Nyakiamo',
    category: 'Budgeting',
    readTime: '6 min read',
    image: blogBudgetTogether,
  },
  {
    id: 'what-is-your-mission-statement',
    title: 'What Is Your Mission Statement?',
    excerpt: 'I bet you can recite your company\'s mission statement without making reference to the employee brochure. So what is your personal mission statement?',
    content: `I bet you can recite your company's mission statement without making reference to the employee brochure.

So what is your personal mission statement? You probably have one but it is all in your head. Get out your notebook and write it down. The usual ones I have come across include:

• Retire at 50/60/70/100 years old
• Save my first million
• Go on holiday to the North Pole or Hawaii depending on your temperature tolerance
• Buy a home
• Save 6 months of my salary for emergency
• Buy medical insurance
• Raise a rainy day fund
• Pay off all my debt by Christmas
• Resign from employment and start my own business in 5 years

Now we are getting somewhere. With your mission or goals, you can work backwards and figure out how much you need to raise to enable you achieve your ambition. Ken Boyd says "When setting financial goals, be realistic, consider your values and consider your time frame."

Most personal financial advice starts with "Pay yourself first". I love this. So I made sure I put aside a certain amount to splurge every month. That was until I read the book Richest Man in Babylon by George S. Clason. According to him, the amount you pay yourself is not the amount you pay to the baker, tailor, shoemaker or grocer. It is the amount that you save or invest to improve your state in life or to cater for your needs when you are no longer able to earn a living.

Next, always have plans for the money you are saving. If you do not, your friends, relatives and tradesmen all have plans for your 'gold' says George S. Clason. Have you noticed how there are always emergencies just when you receive some money?

I do not advocate for you to be a miser or not to help when needed. However, some emergencies need to be put through the 7 day test (or 48 hour test). The shoes you see on the street on your way home that are not in your budget, will they seem urgent in 48 hours or 7 days? Most likely not.

Ask. Always ask. Ask for discounts, ask how you can get cheaper service or goods. Never accept anything at face value.`,
    date: 'July 17, 2019',
    author: 'Susan Nyakiamo',
    category: 'Finance',
    readTime: '5 min read',
    image: blogMindYourMoney,
  },
  {
    id: 'how-much-do-i-need-to-invest',
    title: 'How Much Do I Need To Invest?',
    excerpt: 'There is no cut and dried answer to this question. However these four points will point you in the right direction towards your investment journey.',
    content: `There is no cut and dried answer to this question. However the four points listed below will point you in the right direction:

• How much do you have to invest?
• What is your risk tolerance?
• What are the returns on the investment?
• Can you live off of the returns (interest and dividends) only without touching the principal amount once you stop working?

**You Are Better Off Than You Think**

I know it looks a little doomy and gloomy right now but I assure you, you are better off than you think.

There are a number of investments you have made that you completely overlook. Take Social Security that is deducted from your salary every month. How much interest has it accrued up to now? No idea? Go check your statement and add the number to your budget. Congratulations on having something saved for when you retire.

The same applies to the medical insurance. Do you utilise this facility or do you pay out of pocket for all your medical costs? Take some time to read about the services due to you by virtue of contributing to the national hospital insurance fund.

Do you contribute to a SACCO? Did you buy shares and forget about them? Add these to the investment column of your budget. See. You are not starting from zero.

**How To Train Yourself To Love Saving**

It is not easy or fun to delay gratification of your wants by saving. But we know it is good for us, like fruits and vegetables. My advice, buy yourself a piggy bank (which makes saving fun and will always bring a smile to your face) and secondly acquire love for routine using any one of the strategies below:

• The 52 week money challenge with whatever adaptation suits you
• Start small with gradual increments - start by depositing the smallest denomination of your currency into your piggy bank
• Keep 10% of every amount you get as savings - George Clason's rule no.1 to fattening your purse

Please note that the point here is NOT to raise a huge amount of money but to get into the habit of saving.`,
    date: 'August 7, 2019',
    author: 'Susan Nyakiamo',
    category: 'Investment',
    readTime: '6 min read',
    image: blogGrowIncome,
  },
  {
    id: 'the-eyes-of-others-ruin-us',
    title: 'It Is The Eyes Of Others That Ruin Us',
    excerpt: 'If all the world were blind except myself, I should not care for fine clothes or furniture. It is the fear of what "people" will say that makes most of us work so hard.',
    content: `Not our own.

If all the world were blind except myself, I should not care for fine clothes or furniture. It is the fear of what "people" will say that makes most of us work so hard.

Mr. Smith may say, I have Kshs.1,000 a month while Mr. Doe has Kshs.50,000. I knew him when he was poor like myself and now he is rich and thinks he is better than I am. I will show him that I am as good as he is. I will go and hire an expensive car and ride on the same road as he does and thus prove to him that I am as good as he is.

On her part, Mrs. Smith might say, "Jane married John Doe for his money and everybody says so." Jane has a nice $1,000 Chanel suit, and Mrs Smith will make Mr. Smith buy her an imitation one and sit next to Jane Doe in church in order to prove that they are equals.

The Smiths need not put on airs to convince anyone that they are better than Mr & Mrs. Doe. They can easily prove their worth by behaving as well as the Does. Keep away from vanity and envy. Oh and by the way "people" do not care about what you do or do not do. They are too busy buried in their own business.

**And When You Get That Salary Increment…**

Some rich gentleman promised to buy his wife a new and elegant sofa when he started to prosper. When the sofa reached the house it was found necessary to get chairs to match. Then side boards, carpets and tables to correspond with them and so on until the full set of furniture was obtained.

At last it was found that the house itself was quite too small and old fashioned for the furniture and a new house was built to correspond with the new purchases. This led to servants, equipage and other expenses to keep the new larger house in good order.

These are the trappings of wealth. We are tempted to wear our wealth on the outside - living in neighbourhoods that correspond with our salary, outfits, phones, computers, cars, clothes and so on. Unless it is earning you interest or income, or you saved up for it, do not take a loan to obtain the trappings of wealth. Better to be wealthy than appear wealthy.

**Keeping Up With The Joneses**

One of Kenya's prominent radio presenters, Caroline Mutoko, made a presentation where she admitted that she has not purchased a phone in the past 12 years! She said all her electronics are gifts from the manufacturers who want her to be their brand ambassador.

So if you see her with the latest gadget and go and buy it because you would like to be like her, she thinks you are crazy because she would never spend that much on a phone herself.

"If you compare yourself with others, you may become vain or bitter, for always there will be greater and lesser persons than yourself." — Desiderata

**Lesson for life: "Keep up with you."**`,
    date: 'September 4, 2019',
    author: 'Susan Nyakiamo',
    category: 'Mindset',
    readTime: '7 min read',
    image: blogValentineMoney,
  },
  {
    id: 'i-cannot-get-a-job',
    title: 'I Cannot Get A Job',
    excerpt: 'I whined this way to a friend of mine immediately I completed campus. She gave me a schedule to follow that has never failed me.',
    content: `I whined this way to a friend of mine immediately I completed campus. She gave me a schedule to follow that has never failed me and I will share it with you here.

**1. Job seeking is your new full time job.**

Work at it from 8am to 5pm, Monday to Friday, to obtain results. Surfing the net for kitten videos and latest episode of your favourite series should be done outside of working hours.

**2. Update your CV and tailor it to match each application.**

Do not use the same CV to apply for different positions. For every vacancy announcement, emphasise your corresponding qualifications.

**3. Make at least 100 applications.**

Where will you get them from?

• Start with blind applications to companies you have always dreamed of working in
• Next get in touch with your network and let them know you are looking
• Respond to all vacancy advertisements that you are 50% qualified for. Most adverts look for the ideal candidate and not finding them, they go for the next best candidate that may just be you
• Check job websites for vacancies. Register on LinkedIn, Brighter Monday and other sites where employers and employees interact
• Go office to office to check for vacancies especially in the industrial area. Old is gold

**4. Remember to file a copy of the advert, your application and corresponding CV for each application.**

It is good for keeping a tally of the number of applications made but also for reference when you get called in for an interview.

Before you get to 100, you will have received interview invitations. Try it. It works for me every time.`,
    date: 'June 12, 2019',
    author: 'Susan Nyakiamo',
    category: 'Lifestyle',
    readTime: '4 min read',
    image: blogInvestLikePro,
  },
  {
    id: 'time-is-more-valuable-than-money',
    title: 'Time Is More Valuable Than Money',
    excerpt: 'Arnold Bennet claims that if you have time, you can have money. On the flip side, with all the money in the world, you cannot buy time.',
    content: `Ever heard the saying time is money? This weekend I discovered its enhancement. Arnold Bennet claims that if you have time, you can have money. Whether you beg, steal, borrow or work for it, with time you can get money. On the flip side, with all the money in the world, you cannot buy time. We all have 24 hours a day. We cannot even take an advance on tomorrow. We have to wait patiently with the rest of the world to be allocated our next 24 hours.

One of the first motivation videos I ever watched in my life was by Les Brown. I was fresh out of college newly released to the unsuspecting public. He raised a question I am yet to address satisfactorily to this day.

**How many hours a day did Martin Luther King, Mother Teresa, Nelson Mandela, Mahatma Gandhi and your favourite idol have, in order to achieve what they achieved in their lifetime? And how many hours a day do you have? So what have you achieved?**

Where am I going with this? Think of your day - 24 hours. The medical experts advise we should sleep 8 hours a night. 8 hours I believe is consumed by our work day but where does the remaining 8 hours go?

I am hunting for my missing 8 hours because clearly, I could hold another full time job and still sleep the recommended 8 hours! Never thought of it that way before.

Once you find the elusive 8 hours, think about investing the time in developing yourself. Be it physically, mentally, spiritually, academically and all other -allys you can think about. Do not waste the non-renewable resource that is time.

**What Are You Doing?**

A story is told of 3 men at a building site. They each had a large boulder that they were cutting to smaller stones. A traveller asked each one what they were doing.

Worker 1: "I am splitting rocks. Can't you see? Back breaking work for peanut pay."

Worker 2: "I am working to earn a living so I can provide for my family."

Worker 3: "I am building a cathedral. People will come from far and wide to worship and receive consolation."

And you, what are you doing? Are you splitting rocks or building a cathedral? The mindset is different even though the task is the same.`,
    date: 'June 19, 2019',
    author: 'Susan Nyakiamo',
    category: 'Mindset',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'the-five-minute-favour',
    title: 'The Five Minute Favour',
    excerpt: 'We cannot help everyone but everyone can help someone. The five-minute favour is exactly this – you deliberately set out to do a favour for someone that will take you exactly 5 minutes.',
    content: `Yesterday I came across the beautiful phrase I have used in the title today.

One day I was carrying a large suitcase and a bag up the stairs. Well, I travel a lot and I do not travel light. I met a boy running down the stairs. He got to where I was and politely offered to help me with my luggage. I was so glad and I let him. Once I got to the door, he was off like a lightning bolt and I was left shouting "Thank you!" to his quickly retreating back.

I was touched. It is not often nowadays that you find people that help at no cost. That same evening, I was on the way to my house. I got in the matatu and an elderly lady was trying to get in after me. She had several baskets and bags that she was slowly trying to load into the matatu before getting in herself. Now normally I leave and let live but on this day, I remembered the kindness of the boy earlier in the day and so I helped the lady lift up a sack into the matatu.

What I did is what some people call paying it forward. There are some favours and services that people do for us consciously or unconsciously that we could never repay. The next best thing to do is to repeat the favour to someone else in the hopes that they will catch the bug and do it to the next and the next and the next. I define this as investing in others. Try it and see what happens.

We cannot help everyone but everyone can help someone. The five-minute favour is exactly this. You deliberately set out to do a favour for someone that will take you exactly 5 minutes. For example:

• Like a tweet or a post on social media
• Forward a vacancy to someone who is looking
• Send out a recommendation for a referee
• Compliment someone on a job well done
• Buy from a vendor that seems to be struggling
• Give up your place in a long queue

Be creative. Find 5 Five minute favours and see how they change your world.`,
    date: 'October 19, 2019',
    author: 'Susan Nyakiamo',
    category: 'Lifestyle',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'what-is-the-purpose-of-working',
    title: 'What Is The Purpose Of Working?',
    excerpt: 'I heard Brian Tracy\'s answer to this and I am leaning towards agreeing with him. We work so that we can get to a point where we do not have to work any more.',
    content: `Ever wondered about this?

I heard Brian Tracy's answer to this and I am leaning towards agreeing with him. Take a minute and ask yourself, "Why am I working/ Studying/ or whatever your occupation may be." His take is that we work so that we can get to a point where we do not have to work any more. Call it retirement, taking it easy or financial independence.

The point being, if you want to keep working because you love your job, it is a matter of choice, not a necessity. I had never thought about it that way before. My focus had been more from the financial independence perspective.

In the same way, businesses do tax planning, we should make a retirement plan.

**Step 1**: How long would you like to live after you stop working? If it was up to you, how many years would you like to continue living after retirement? Let me say 20 years or thirty or forever. This is your long term goal.

**Step 2**: How much money will you need to be able to sustain the lifestyle you want without working? In order to get this number, you need to establish how much you currently spend per month.

**Step 3**: Armed with your list of all your regular monthly expenses, you can now extrapolate and come up with your number. Say your number is Kshs.25,000 – multiply this by 12 to get your annual needs. Next, multiply by 20 (if 20 is the number of years you would like to live after retirement if it was up to you). And just like that, you have your Number!

**Step 4**: Now work backwards to establish how much you need to invest in order to reach your Number. Note that I said invest and not save. When you invest, you expect a higher return and of course, you would be earning interest on both the principal and the interest accrued.

Wouldn't that be lovely?`,
    date: 'November 13, 2019',
    author: 'Susan Nyakiamo',
    category: 'Finance',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/162540/hard-hat-firefighter-helmet-fireman-162540.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'never-go-window-shopping',
    title: 'Never Go Window Shopping With Money In Your Pocket',
    excerpt: 'I do not know what happens to us when we have cash on us. It is as if it burns a hole in our pockets. For this reason, all financial advisors insist that one prepares the budget before receiving the cash.',
    content: `I heard this saying for the first time in the movie "The Preacher's Wife", starring Denzel Washington and Whitney Houston.

I do not know what happens to us when we have cash on us. It is as if it burns a hole in our pockets. For this reason, all financial advisors insist that one prepares the budget before receiving the cash. The same rationale applies to investment.

The reason I shared the document on risk tolerance at the beginning of the investment series is exactly the same. Investments decisions are hugely affected by our psychological state at the time the decision is made. To remove the emotional aspect when making investments, we need to have the strategy cast in stone before you actually commit to the investment.

Take the stock exchange. When one buys shares it is most likely because they heard or saw the company they are investing in made profits or is paying out high dividends. A few months later, the value of the share in the stock exchange falls for whatever reason and you feel like you made a bad investment.

**Share value falls**: The knee jerk reaction is to sell your shareholding before the value falls even further. However, this is the exact opposite reaction you should have as an investor. The only way you will stick it out is if you have an investment strategy. Before making the investment, you need to set your limits.

For example, I would like to make a 30% profit on this share and then I will sell. Or I will hold the share until I make 100% profit etc. And when you achieve your goal, please sell and get out.

You will never know the best time to jump ship. The only way to mitigate this risk and your natural instincts in order to stick to the plan is to have the plan before the market starts fluctuating. The same applies to budgeting.

You should budget before the salary is in your account otherwise you go cash crazy. Now you know. Budget in advance and prepare an investment strategy/plan in advance as well.`,
    date: 'November 12, 2019',
    author: 'Susan Nyakiamo',
    category: 'Investment',
    readTime: '4 min read',
    image: blogNeverWindowShop,
  },
  {
    id: 'your-relationship-with-money',
    title: 'Your Relationship With Money',
    excerpt: 'It always seems impossible until it is done. Do you remember Mike Tyson? The unbeatable and undisputed boxing heavyweight champion? Then one day he got knocked out by Buster Douglas.',
    content: `**It Always Seems Impossible Until It Is Done**

Do you remember Mike Tyson? The unbeatable and undisputed boxing heavyweight champion? For a while he held that title. He won his matches with frequent knock-outs making him the darling of his fans. However, at some point, he became so notorious that nobody wanted to fight him. Then one day he got knocked out by Buster Douglas.

It was unbelievable. Where did this unknown come from and how did he manage to beat the unbeatable champion? On the flipside, after Buster Douglas, everybody wanted to fight Mike Tyson and make a name for themselves.

I got these stories from Les Brown but I find this repeated in all areas of life. An insurmountable mountain that gets crested by one crazy guy and suddenly everyone is summiting the mountain like it is the norm. As social beings, we tend to follow what is done.

Probably you have been told that people from your area, people like you or nobody in your family has ever been successful. So what? Be the trail blazer. How many millionaire stories have you heard or read about that describe the individual as being broke or bankrupt at some point? This means if you are struggling now, you are in good company.

What is stopping you from following their example? Go on beat the 'Mike Tyson' of poverty and indebtedness. Many people have done it before you and left a smoother trail for you to follow.

**Seven Cures For A Lean Purse:**

1. Keep (save) a tenth of all you earn
2. Control your expenditure – always spend less than you earn
3. Multiply your money – Select some form of investment
4. Guard your treasure from loss – identify all the risks your investment could face
5. Make your house a profitable investment
6. Insure a future income for when you will not be able to earn a living
7. Increase your ability to earn

— George S. Clason`,
    date: 'June 26, 2019',
    author: 'Susan Nyakiamo',
    category: 'Mindset',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'i-am-too-old-to-retire',
    title: 'I Am Too Old To Retire',
    excerpt: 'Clearly those are not words you would expect to be said in the same sentence. For the longest time, retirement has been associated with age. No more.',
    content: `Clearly those are not words you would expect to be said in the same sentence. For the longest time, retirement has been associated with age. No more.

I googled "youngest retiree" and was shocked at the list! So far, the one who is winning is a Canadian girl that retired at 31. Not bad for one who grew up poor in China and whose first prized possession was a can of Coca Cola.

Kristy Shen says her understanding of 'retirement' is "you don't need to work anymore because the passive income from your portfolio pays for your living expenses so you can actually choose to work or not to work at that point."

She said; "I also found that, actually, people don't realise how much money they're paying to work... on commuting to work every day, buying professional clothing and dry cleaning, for people with children, how much money they have to pay for daycare and childcare?"

She continued; "One of the things that people don't realise until after they reach higher is that their costs go down, because all of those costs that are associated with working completely disappear."

For both Derek Foster (who retired at 34) and Kristy, retirement was linked to investment. Pick and choose what works for you. Tailor it to your goals.

**Retirement Fund**

On my first job, I was sharing an office with a lady called Mary. One day, she had a meeting with her broker and when they were through, she requested her broker to come chat with me about saving for retirement. The broker asked me to save Kshs.5,000 a month in a mutual fund. I was thinking clothes and food so I said "thank you, but no thank you" and forgot about it.

Mary kept bugging me about retirement. She told me how she wishes someone had told her about starting to save for retirement early. I ignored her too but kept the wisdom. When I lost my first job, their words came to haunt me. I would have had a nice nest egg after 4 years of working (4 years x Kshs 5,000 x 12 months = Kshs.240,000).

When I got my second job, I immediately joined a retirement scheme. This time, it was recommended I save Ksh.15,000 per month. I did not hesitate for even one second.

The government has it right. Immediately you start working, you start contributing to the Social security fund. What about you? Do you have a private retirement fund or are you relying on the government one?`,
    date: 'October 2, 2019',
    author: 'Susan Nyakiamo',
    category: 'Investment',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'save-the-date',
    title: 'Save The Date!',
    excerpt: 'Gotcha! What I mean is that to build your saving habit, you can save by the date of the month. Simple and practical.',
    content: `Gotcha!

What I mean is that to build your saving habit, you can save by the date of the month.

1. During a dry month, you can save Kshs.1 on the 1st of the month, Kshs.2 on the 2nd and so on.
2. On a month that you are tightening your belt, you can save Kshs.10 on the 1st of the month, Kshs.20 on the 2nd etc.
3. On a good month, you can save Kshs.100 on the 1st of the month, Kshs.200 on the 2nd etc.
4. In a month of plenty, you can save Kshs.1,000 on the 1st, Kshs.2,000 on the 2nd etc.

At the end of the month, bank or invest the total amount. Simple and practical.

**If It Is Painful, You Are Doing It Wrong**

How is your financial plan going?

If the answer is bad, not good, given up, dreary, stressing me out, cannot remember, what financial plan? or any other negative adjectives, then you are doing it wrong. It should be fun not painful!

The plan is meant to align with your life goals, not be written down and stored safely until further notice. It is supposed to inspire you. Every time you say no to something, think of it as saying yes to something else. For instance, it is easier to forego a hearty meal at an expensive restaurant if you think of the saving as the purchase of a bag of cement for your dream house.

To date, the most fun I have had with my finances is saving in a piggy bank. The sound of the coins as they noisily clink into the empty box until the point where it is a dull clink because the piggy bank is full and requires emptying. And the grand reveal at emptying after counting all the money to discover I have actually saved a potful of good money.

**Tips for piggy bank saving:**

• Have a goal or purpose for the saving
• You can deposit notes as well - just because it is a piggy bank does not mean you have to feed it coins alone
• Make it part of your routine - every evening, empty your pockets of any loose change and piggy bank it
• When it is full, count out your stash and bank the whole of your collection
• When you reach your target, celebrate!`,
    date: 'September 18, 2019',
    author: 'Susan Nyakiamo',
    category: 'Finance',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const categories = ['All', 'Lifestyle', 'Finance', 'Investment', 'Mindset', 'Budgeting'];
