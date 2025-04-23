interface Pagedetails{
    createAt: Date;
    updateAt: Date;
}

interface Page{
    title: string,
    likes: number,
    accounts: string[],
    status: 'open'| 'close',
    details?: Pagedetails,
}
function book(page: Page) {
  console.log(
    `Information: ${page.title}, ${page.likes}, ${page.accounts.join(', ')}, ${page.status}, ${
      page.details ? `${page.details.createAt.toDateString()} - ${page.details.updateAt.toDateString()}` : 'No details'
    }`
  );
}



const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Niikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Pyton or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

book(page1);
book(page2);