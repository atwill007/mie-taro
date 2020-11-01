export const richTextList = [
  {
    html: `
      <div class="test">hello</div
    `,
    styleText: `
      .test {
        background: orange;
      }
    `
  },
  {
    html: `
      <div class="one">
        <div class="one-imagen">
          <a href="http://www.wufazhuce.com" class="logo"><img src="http://image.wufazhuce.com/www-fp-logo.png"></a>
          <img src="http://image.wufazhuce.com/FpJEW5m3FSkmNMhpdCJdgI2LzJgN" alt="">
        </div>
        <div class="one-cita-wrapper">
          <div class="one-cita">
            我不愿承认生活最后会沦落得与拙劣的文学作品如此相像。 </div>
          <div class="one-pubdate">
            <p class="dom">31</p>
            <p class="may">Oct 2020</p>
          </div>
        </div>
      </div>
    `,
    styleText: `
      img {
        max-width: 100%;
      }
      .one-cita-wrapper {
        background-color: #f2f2f2;
        display: table;
        height: 180px;
        margin-bottom: 30px;
      }
      .one-pubdate {
        color: #01aef0;
        float: right;
        padding: 50px 0;
        width: 120px;
      }
      .one-pubdate .dom {
        font-size: 56px;
        font-weight: 600;
        height: 56px;
        line-height: 56px;
        margin: 0;
        text-align: center;
      }
      .one-pubdate .may {
        margin: 0;
        font-size: 14px;
        text-align: center;
      }
      .one-cita {
        display: table-cell;
        font-size: 14px;
        height: 120px;
        line-height: 1.67;
        margin-right: 120px;
        padding: 10px 5%;
        text-align: left;
        vertical-align: middle;
        width: 100%;
      }
    `
  }
]
