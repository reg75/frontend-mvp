export default function VirtueRow({
    virtues = [],
    title = "virtues",
    onSelectVirtue = null, // optional: (virtue) => void
}) {
    if (!Array.isArray(virtues) || virtues.length === 0) {
        return (
            <section className="virtueRow">
                <div className="virtueRow__header">
                    <h2 className="virtueRow__title">{title}</h2>
                </div>
                <p className="virtueRow__empty">No virtues available</p>
            </section>
        );
    }

    return (
        <section className="virtueRow" aria-label={title}>
            <div className="virtueRow__header">
                <h2 className="virtueRow__title">{title}</h2>
                <p className="virtueRow__hint">Scroll...</p>
            </div>

            <div className="virtueRow__scroller" role="list">
                {virtues.map((v) => {
                    const key = v.id || v.slug || v.name;
                    const clickable = typeof onSelectVirtue === "function";

                    return (
                        <article
                            key={key}
                            className={`virtueCard ${clickable ? "virtueCard--clickable" : ""}`}
                            role="listitem"
                        >
                            <button
                                type="button"
                                className="virtueCard__button"
                                onClick={clickable ? () => onSelectVirtue(v) : undefined}
                                disabled={!clickable}
                                aria-disabled={!clickable}
                            >
                                <h3 className="virtueCard__name">{v.name}</h3>
                                <p className="virtueCard__desc">
                                    {v.shortDescription ||
                                        v.description ||
                                        "No description available"}
                                </p>
                            </button>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
