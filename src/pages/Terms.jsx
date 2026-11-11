import { APP_NAME } from '../config.js'
import { termsOfService as terms } from '../content.js'
import { PageHeader } from '../components/Sections.jsx'

const toc = [...terms.sections.map((s, i) => ({ id: s.id, label: `${i + 1}. ${s.title}` })), { id: 'questions', label: 'Questions' }]

function Block({ block }) {
  if (block.type === 'h3') return <h3>{block.text}</h3>
  if (block.type === 'list')
    return (
      <ul className="policy__list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  return <p>{block.text}</p>
}

export default function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms of Use"
        meta={
          <span className="meta-chip">
            Effective date: <time dateTime="2026-11-11">{terms.effectiveDate}</time>
          </span>
        }
      >
        The terms that apply to using the {APP_NAME} app and this website.
      </PageHeader>

      <section className="section policy-body">
        <div className="container policy">
          <aside className="policy__toc" aria-labelledby="toc-title">
            <h2 id="toc-title">On this page</h2>
            <ol>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="policy__content">
            <p className="policy__intro">{terms.intro}</p>

            {terms.sections.map((section, i) => (
              <section key={section.id} id={section.id} className="policy__section" aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`}>
                  <span className="policy__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </section>
            ))}

            <section id="questions" className="policy__section policy__section--aside" aria-labelledby="questions-title">
              <h2 id="questions-title">Questions</h2>
              <p>
                If you have a question about these Terms, please use the details on the <a href="/contact">contact page</a>.
                See also the <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}
